!(function () {
  function HTMLBook(source) {
    this.source = source;

    // Detect if module is being run from the browser or a Node environment and
    // set up a standard logging platform for both as well as requiring
    // dependencies properly.
    if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
      var sys = require('sys');
      this.log = function (message) {
        sys.puts(message);
      }
      // If this is
      this.$ = require('jquery');
      this.marked = require('marked');
    }
    else {
      this.$ = $;
      this.marked = marked;
      this.log = function (message) {
        console.log(message);
      }
    }

    this.marked.setOptions({
      gfm: true
    });
  }

  var hp = HTMLBook.prototype = {
    parse: function () {
      var body = this.$('<body>').append(this.source),
        children = body.children(),
        args = Array.prototype.slice.call(arguments),
        options = {
          debug: true,
          fragment: true,
          level: htmlbook_spec.chapter,
          sourceFormat: 'html'
        },
        logs = [];

      // parse arguments and merge with options
      if (args.length == 1 && typeof args[0] === 'object') {
        options = this.$.extend(options, args[0]);

        if (typeof htmlbook_spec[options.level] !== 'undefined') {
          options.level = htmlbook_spec[options.level];
        } else {
          logs.push("please specify a valid htmlbook level. defaulting to chapter");
          options.level = htmlbook_spec.chapter;
        }

        if (options.debug === false) {
          this.log = function (message) {
            return message;
          }
        }

        if (options.sourceFormat === 'markdown') {
          children = this.$('<body>').append(this.marked(this.source)).children();
        }
      }

      if (options.fragment) {
        return this.parse_html(children, options.level);
      } else {
        return skeleton.header + this.parse_html(children, options.level) + skeleton.footer;
      }
    },

    // parse_html - recursive part of this library, takes an amount of html,
    // looks at top level header, and looks for a sub-section. if there's a
    // subsection, call this again.
    // content: jQuery collection where the first element is a header.
    parse_html: function (content, htmlbooklevel) {
      if (!(htmlbooklevel != null)) {
        return content;
      }

      this.log("\n>>> Making section " + htmlbooklevel.name);
      // initialize variables
      var section;
      var next_section = '';

      // Take the input, wrap it in a div and then get the children. In this way
      // if 'content' is a string it will be converted into a jQuery object and
      // if it's already a jQuery object everything is fine.
      var wrap = this.$('<div>').html(content);
      var children = wrap.children();

      if (children.length === 0) { return ''; }

      // Do some analysis on the first element. HTMLBook is pretty strict as to
      // what the first element should be: either a heading or a div must start
      // a new section. If the element is neither of those, assume we have inner
      // section content.
      var first_element = this.deconstruct_heading(children.first(), htmlbooklevel);

      // are there more headings?
      if (first_element != false) {
        this.log("found a heading as the first element")
        var more_headings = this.find_headings(content, first_element.tag_name);
        var arr = this.wrap_in_section(htmlbooklevel, children, first_element, more_headings);
        section = arr[0];
        next_section = arr[1];
      } else {
        var rest = content.splice(1);
        var first = content;
        var section_content;
        this.log('no more headings in this branch.');
        section_content = this.$('<div>').html(first).html() + this.parse_html(rest, htmlbooklevel);

        section = this.$('<div>').html(section_content).html();
      }

      return this.$('<div>').html(section).html() + next_section;
    },

     wrap_in_section: function (htmlbooklevel, children, first_element, more_headings) {
      var subheading, next_heading_index, nested_element_count, section_content, next_section = ''

      if (more_headings == 'samelevel') {
        subheading = htmlbook_spec[htmlbooklevel.child];
        next_heading_index = this.$('<div>').html(children).find(first_element.tag_name+':gt(0)').first().index();
        nested_element_count = next_heading_index - 1;

        section_content = this.parse_html(children.splice(1, nested_element_count), subheading);
        next_section = this.parse_html(children.splice(1), htmlbooklevel);
      } else if (more_headings == 'subheadings') {
        subheading = htmlbook_spec[htmlbooklevel.child];
        this.log('sub headings');
        section_content = this.parse_html(children.splice(1), subheading);
      } else {
        // There are no other headings, so the work is done.
        this.log("no more headings in the document.");
        section_content = children.splice(1);
      }

      section = this.$('<section data-type="' + htmlbooklevel.name + '">');
      section.append(first_element.html).append(section_content);

      return [section, next_section];
    },

    find_headings: function (content, parent_tag_name) {
      var content = this.$(content).clone().splice(1);
      var wrap = this.$('<div>').html(content);
      var heading_index = parseInt(parent_tag_name.substr(1));
      var subheadings = this.$(wrap).find('h' + (heading_index+1));

      if (heading_index == 6) {
        return false;
      } else if (this.$(wrap).find(parent_tag_name).length > 0) {
        return 'samelevel';
      } else if (subheadings.length > 0) {
        return 'subheadings';
      } else {
        return false;
      }
    },

    deconstruct_heading: function (heading, htmlbooklevel) {
      var tag_name = heading.prop('tagName');
      if (tag_name.match(/H[1-6]/) == null) {
        return false;
      } else {
        return {
          'tag_name': tag_name,
          'heading': htmlbooklevel.heading,
          'level': htmlbooklevel.name,
          'content': heading.html(),
          'html': '<' + htmlbooklevel.heading + '>' + heading.html() + '</' + htmlbooklevel.heading + '>'
        }
      }
    }
  }

  function Export(str) {
    return new HTMLBook(str);
  };

  var skeleton = {
  'header': '<!DOCTYPE html><html xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.w3.org/1999/xhtml ../schema/htmlbook.xsd" xmlns="http://www.w3.org/1999/xhtml"><head><title>HTMLBook Sample</title><meta name="HTMLBook Sample" content="text/html; charset=utf-8" /></head><body data-type="book" class="book" id="htmlbook">',
  'footer': '</body></html>'
  }

  var htmlbook_spec = {
    'book': {
      name: 'book',
      parent: false,
      child: 'chapter',
      heading: 'h1',
      level: 0
    },
    'chapter': {
      name: 'chapter',
      parent: 'book',
      child: 'sect1',
      heading: 'h1',
      level: 1
    },
    'sect1': {
      name: 'sect1',
      parent: 'chapter',
      child: 'sect2',
      heading: 'h1',
      level: 2
    },
    'sect2': {
      name: 'sect2',
      parent: 'sect1',
      child: 'sect3',
      heading: 'h2',
      level: 3
    },
    'sect3': {
      name: 'sect3',
      parent:'sect2',
      heading: 'h3',
      level: 4
    },
    'sect4': {
      name: 'sect4',
      parent:'sect3',
      child: false,
      heading: 'h4',
      level: 5
    }
  }

  // EXPORTS from string.js
  if (typeof module !== 'undefined'  && typeof module.exports !== 'undefined') {
    module.exports = Export;

  } else {

    if(typeof define === "function" && define.amd) {
      define([], function() {
        return Export;
      });
    } else {
      window.HTMLBook = Export;
    }
  }

}).call(this);