var sys = require('sys'),
  fs = require('fs'),
  util = require('util'),
  _ = require('underscore'),
  htmlparser = require('htmlparser2'),
  html = require('html'),
  marked = require('marked'),
  schema = require('./schema'),
  elements = schema["xs:schema"]["xs:element"],
  complex = schema["xs:schema"]["xs:complexType"],
  S = require('string');

marked.setOptions({
  gfm: true,
  tables: true
});

var markdown_headers = ['h1','h2','h3','h4','h5','h6'],
  htmlbook_headers = ['h1','h1','h2','h3','h4','h5'],
  heirarchy = ['chapter', 'sect1', 'sect2', 'sect3', 'sect4', 'sect5'],
  void_elements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];

(function () {
  var helpers = {
    existy: function (x) {
      return x != null;
    },
    // Converts an integer to 2 space indentation.
    indentation: function (n) {
      return _.times(n, function () {
        return "  "
      }).join("")
    },

    get_language: function (str) {
      if (!this.existy(str)) return null;
      match = str.match(/lang\-(\S*)/);

      if (this.existy(match)) {
        return match[1]
      } else {
        return "";
      }
    },

    attribs_to_string: function (obj) {
      if (!this.existy(obj))
        return ""

      return _.reduce(_.pairs(obj), function (memo, v) {
        if (this.existy(v[1]) && v[1].length > 0)
          return memo + " " + v[0] + "='" + v[1]+ "'"
        else if (this.existy(v[1]) && v[1] === "")
          return memo + " " + v[0] + "=''"
        else
          return memo;
      }, "", this);
    }
  }

  var normalize_headings = function (arr) {
    return _.map(arr, function (n, i) {
      if (i == 0)
        return n
      else if (n > arr[i-1]+1)
        return arr[i-1] + 1
      else
        return n
    });
  }

  var concat_times = function (n, str, connector) {
    return _.times(n, function () {
      return str
    }).join(connector)
  }

  var close_sections = function (o, c) {
    return concat_times(o - c, "</section>", "\n");
  }

  function HTMLBook (input, opts) {
    this.input = input;
    this.depth = 0;
    this.options = {};
  }

  HTMLBook.prototype.header_content = function () {
    if (!helpers.existy(this.title)) throw new Error("No title provided.")

    return '<?xml version="1.0" encoding="utf-8"?>\n\n<!DOCTYPE html>\n\n<html xmlns="http://www.w3.org/1999/xhtml" lang="en">\n<head>\n<title>' + this.title + '</title>\n</head>\n<body data-type="book">\n<h1>' + this.title + '</h1>\n';
  }

  HTMLBook.prototype.footer_content = function () {
    return "\n</body>\n</html>";
  }

  // Parse the html input and pass off to the traverse callback
  HTMLBook.prototype.parse = function (opts) {
    this.first_sect = true;
    this.options.parse = {"complete_html": false}
    if (helpers.existy(opts) && typeof opts === "object") {
      this.title = opts.title;
      this.options = _.extend(this.options, opts);
      this.options.parse = _.extend(this.options.parse, opts)
    }

    if (!helpers.existy(this.input)) throw new Error("No content");
    this.closings = 0;
    this.openings = 0;
    this.first_heading = true;
    this.first_sect1 = false;
    var handler = new htmlparser.DomHandler(function (error, dom) {
      if (error) {
        console.log('error dog');process.exit(1)
      }
    });
    var parser = new htmlparser.Parser(handler);
    parser.write(marked(this.input));
    parser.end();

    if (this.options.parse.complete_html === true) {
      return this.header_content() + this.traverse(handler.dom) + close_sections(this.openings, this.closings) + this.footer_content();
    }
    else {
      return this.traverse(handler.dom) + close_sections(this.openings, this.closings);
    }
  }

  // Construct an opening tag with the specified attributes.
  var open_tag = function (node) {
    return "<" + node.name + helpers.attribs_to_string(node.attribs) + ">"
  }

  var void_tag = function (node) {
    if (node.name === "input") {
      return "<div><" + node.name + helpers.attribs_to_string(node.attribs) + "/></div>";
    } else {
      return "<" + node.name + helpers.attribs_to_string(node.attribs) + "/>"
    }
  }

  var close_tag = function (node) {
    return "</" + node.name + ">"
  }

  HTMLBook.prototype.section_start = function (name) {
    var current_section = heirarchy[this.depth];
    var header_depth = _.indexOf(markdown_headers, name);
    var new_section = heirarchy[header_depth];
    var closings = 0;

    if (this.depth === header_depth) {
      closings = (this.first_sect === true) ? 0 : 1;
      this.first_sect = false;
    } else if (this.depth < header_depth) {
      this.depth += 1;
    } else if (this.depth > header_depth) {
      closings = this.depth - header_depth + 1;
      this.depth = header_depth;
    }

    this.closings += closings

    return _.times(closings, function() {return "</section>\n"}).join("") + "<section data-type='" + heirarchy[this.depth] + "'>\n";
  }

  HTMLBook.prototype.wrap_in_section = function (node, callback) {
    return this.section_start(node.name) + "<" + htmlbook_headers[this.depth] + ">" + callback(node.children) + "</" + htmlbook_headers[this.depth] + ">\n"
  }

  HTMLBook.prototype.traverse = function (dom_tree, htmlbook_tracker) {
    output = ""

    _.forEach(dom_tree, function (node, i) {
      // When the node is a text type, it has no children, just return it.
      if (node.type === "text") {
        output += S(node.data).unescapeHTML().s.replace(/([<>&])/gm, function(m){return S(m).escapeHTML().s});
      } else if (node.type === "comment") {
        output += "<!-- "+node.data+"-->";
      // Markdown doesn't convert pre blocks the way we would like, so let's
      // step in and make it all work.
      } else if (node.name === "pre" && node.children.length === 1 && node.children[0].name === "code") {
        // Attempt to distinguish between "code" <pre> blocks and other <pre>s
        var code = node.children[0]
        node.attribs["data-code-language"] = helpers.get_language(code.attribs["class"])
        node.attribs["data-type"] = "programlisting";
        output += open_tag(node) + this.traverse(code.children) + close_tag(node);
      // Check to see if this node is a header, which should signal the start // of a new section.
      } else if (_.contains(markdown_headers, node.name)) {
        this.openings += 1;
        output += this.wrap_in_section(node, this.traverse)
      // If a node has children then it has a starting and closing tag.
      } else if (helpers.existy(node.children) && node.children.length !== 0) {
        output += open_tag(node) + this.traverse(node.children) + close_tag(node);
      // Void elements
      } else if (_.contains(void_elements, node.name)) {
        output += void_tag(node)
      // Everything else, typically empty elements with no children.
      } else {
        output += open_tag(node) + close_tag(node);
      }
    }, this);

    return output;
  }

  module.exports = function (str) {return new HTMLBook(str)};
}).call(this);