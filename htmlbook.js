htmlbook = function (source) {
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

  // todo: detect if the input is in a wrapping element (body or div) or not.

  var body = $('<body>').append(source);
  var children = body.children();
  var args = Array.prototype.slice.call(arguments);
  var options = {
    fragment: true,
    level: htmlbook_spec.chapter
  };
  var errors = []

  // parse arguments and merge with options
  if (args.length > 1 && typeof args[1] === 'object') {
    options = $.extend(options, args[1]);

    if (typeof htmlbook_spec[options.level] !== 'undefined') {
      options.level = htmlbook_spec[options.level];
    } else {
      errors.push("please specify a valid htmlbook level. defaulting to chapter");
      options.level = htmlbook_spec.chapter;
    }
  }

  if (options.fragment) {
    return parse_html(children, options.level);
  } else {
    return skeleton.header + parse_html(children, options.level) + skeleton.footer;
  }

  // parse_html - recursive part of this library, takes an amount of html,
  // looks at top level header, and looks for a sub-section. if there's a
  // subsection, call this again.
  // content: jQuery collection where the first element is a header.
  function parse_html (content, htmlbooklevel) {
    console.log("\n>>> Making section " + htmlbooklevel.name);
    // initialize variables
    var section;
    var next_section = '';

    // Take the input, wrap it in a div and then get the children. In this way
    // if 'content' is a string it will be converted into a jQuery object and
    // if it's already a jQuery object everything is fine.
    var wrap = $('<div>').html(content);
    var children = wrap.children();

    // Do some analysis on the first element. HTMLBook is pretty strict as to
    // what the first element should be: either a heading or a div must start
    // a new section. If the element is neither of those, assume we have inner
    // section content.
    var first_element = deconstruct_heading(children.first(), htmlbooklevel);

    // are there more headings?
    if (first_element != false) {
      console.log("found a heading as the first element")
      var more_headings = find_headings(content, first_element.tag_name);
      var arr = wrap_in_section(htmlbooklevel, children, first_element, more_headings);
      section = arr[0];
      next_section = arr[1];
    } else {
      var rest = content.splice(1);
      var first = content;
      var section_content;
      console.log('no more headings in this branch.');
      section_content = $('<div>').html(first).html() + parse_html(rest, htmlbooklevel);

      section = $('<div>').html(section_content).html();
    }

    return $('<div>').html(section).html() + next_section;
  }

  function wrap_in_section (htmlbooklevel, children, first_element, more_headings) {
    var subheading, next_heading_index, nested_element_count, section_content, next_section = ''

    if (more_headings == 'samelevel') {
      subheading = htmlbook_spec[htmlbooklevel.child];
      next_heading_index = $('<div>').html(children).find(first_element.tag_name+':gt(0)').first().index();
      nested_element_count = next_heading_index - 1;

      section_content = parse_html(children.splice(1, nested_element_count), subheading);
      next_section = parse_html(children.splice(1), htmlbooklevel);
    } else if (more_headings == 'subheadings') {
      subheading = htmlbook_spec[htmlbooklevel.child];
      console.log('sub headings');
      section_content = parse_html(children.splice(1), subheading);
    } else {
      // There are no other headings, so the work is done.
      console.log("no more headings in the document.");
      section_content = children.splice(1);
    }

    section = $('<section data-type="' + htmlbooklevel.name + '">');
    section.append(first_element.html).append(section_content);

    return [section, next_section];
  }

  function find_headings(content, parent_tag_name) {
    var content = $(content).clone().splice(1);
    var wrap = $('<div>').html(content);
    var heading_index = parseInt(parent_tag_name.substr(1));
    var subheadings = $(wrap).find('h' + (heading_index+1));

    if (heading_index == 6) {
      return false;
    } else if ($(wrap).find(parent_tag_name).length > 0) {
      return 'samelevel';
    } else if (subheadings.length > 0) {
      return 'subheadings';
    } else {
      return false;
    }
  }

  function deconstruct_heading (heading, htmlbooklevel) {
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

  //from sugar.js
  function multiArgs(args, fn) {
    var result = [], i;
    for(i = 0; i < args.length; i++) {
      result.push(args[i]);
      if(fn) fn.call(args, args[i], i);
    }
    return result;
  }
}