var sys = require('sys'),
  fs = require('fs'),
  util = require('util'),
  _ = require('underscore'),
  htmlparser = require('htmlparser'),
  html = require('html'),
  schema = require('./schema'),
  elements = schema["xs:schema"]["xs:element"],
  complex = schema["xs:schema"]["xs:complexType"],
  queue = require('queue-async');


var headers = ['h1','h2','h3','h4','h5','h6'],
  heirarchy = ['bookmaindiv', 'sect1', 'sect2', 'sect3', 'sect4', 'sect5', 'sect6'];

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

  function HTMLBook (input, opts, callback) {
    this.input = input;
  }

  var the_parser = function (input, callback) {

  }

  // Parse the html input and pass off to the traverse callback
  HTMLBook.prototype.parse = function () {
    this.closings = 0;
    this.openings = 0;
    var handler = new htmlparser.DefaultHandler(function (error, dom) {
      if (error) {
        console.log('error dog');process.exit(1)
      }
    });
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(this.input);
    parser.done();
    return this.traverse(handler.dom) + close_sections(this.openings, this.closings);
  }

  // Converts an object of attributes to a string.
  var attribs_to_string = function (obj) {
    if (!helpers.existy(obj))
      return ""

    return _.reduce(_.pairs(obj), function (memo, v) {
      return memo + " " + v[0] + "='" + v[1]+ "'"
    }, "");
  }

  // Construct an opening tag with the specified attributes.
  var open_tag = function (node) {
    return "<" + node.name + attribs_to_string(node.attribs) + ">"
  }

  var close_tag = function (node) {
    return "</" + node.name + ">"
  }

  var section_starter = function (diff, level) {
    return _.times(diff, function() {return "</section>"}).join("\n") + "\n<section data-type='" + heirarchy[level] + "'>"
  }

  var compare_headings = function (book_section, book_heading, html_heading) {
    var book_val = parseInt(book_heading.substr(1));
    var html_val = parseInt(html_heading.substr(1));

    if (book_section === "chapter"){
      return {heading: "h1", closings: 0, heirarchy: 1}
    }
    else if (book_val === html_val){
      return {heading: "h" + book_val, closings: 1, heirarchy: _.indexOf(heirarchy, "sect"+ book_val)}
    }
    else if (book_val < html_val){
      return {heading: "h" + (book_val+1), closings: 0, heirarchy: _.indexOf(heirarchy, "sect"+ (book_val+1))}
    }
    else if (book_val > html_val){
      return {heading: "h" + html_val, closings:(book_val - html_val + 1), heirarchy: _.indexOf(heirarchy, "sect"+ html_val)}
    }
  }

  HTMLBook.prototype.traverse = function (dom_tree, htmlbook_tracker) {
    // Set depth if not passed.
    if (!helpers.existy(htmlbook_tracker))
      htmlbook_tracker = {"heirarchy" : 0}
    output = ""

    _.forEach(dom_tree, function (node, i) {
      // When the node is a text type, it has no children, just return it.
      if (node.type === "text") {
        output += node.data
      // Check to see if this node is a header, which should signal the start of
      // a new section.
      } else if (_.contains(headers, node.name)) {
        this.openings += 1;
        // output += section_starter(htmlbook_tracker, node);
        bookpart = _.find(complex, function (el) {
          return el["$"]["name"] === heirarchy[htmlbook_tracker.heirarchy];
        });
        bookpart_heading = bookpart["xs:sequence"][0]["xs:element"][0]["$"]['ref']
        bookpart_name = bookpart["$"]["name"]

        if (bookpart_name === "bookmaindiv")
          bookpart_name = "chapter"

        r = compare_headings(bookpart_name, bookpart_heading, node.name)

        htmlbook_tracker.heirarchy = r.heirarchy
        this.closings += r.closings;

        node.name = r.heading

        output += section_starter(r.closings, r.heirarchy) + "\n" + open_tag(node)+ this.traverse(node.children, htmlbook_tracker) + close_tag(node)

      } else if (helpers.existy(node.children)) {
        // Something here to parse the tag and adjust its attribs to align with
        //
        output += open_tag(node) + this.traverse(node.children, htmlbook_tracker) + close_tag(node);
      }
    }, this);
    return output;
  }

  module.exports = function (str) {return new HTMLBook(str)};
}).call(this);