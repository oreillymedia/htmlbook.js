htmlbook = function (source) {
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
  var htmlbooklevel = htmlbook_spec.chapter;

  return make_section(children, htmlbooklevel);

  // make_section - recursive part of this library, takes an amount of html, // looks at top level header, and looks for a sub-section. if there's a
  // subsection, call this again.
  // content: jQuery collection where the first element is a header.
  function make_section (content, htmlbooklevel) {
    var wrap = $('<div>').html(content);
    var children = wrap.children();
    var section_child_content = '';

    // parse the first element, hoping for a heading, and assigning it the
    // proper tag based on the htmlbook level
    console.log(children.first());
    var first_element = deconstruct_heading(children.first(), htmlbooklevel);

    var section_content;

    // are there more headings?
    if (first_element != false) {
      console.log("found a heading as the first element")
      var more_headings = find_headings(content, first_element.tag_name);

      if (more_headings == 'samelevel') {
        section_content = section_child_content
      } else if (more_headings == 'subheadings') {
        var subheading = htmlbook_spec[htmlbooklevel.child];
        console.log('sub headings', subheading);
        section_content = make_section(content.splice(1), subheading);
      } else {
        section_content = content.splice(1);
      }

      var section = $('<section data-type="' + htmlbooklevel.name + '">');
      section.append(first_element.html).append(section_content);
    } else {
      var rest = content.splice(1);
      var first = content;
      console.log('fail point', first, content)
      section_content = $('<div>').html(first).html() + make_section(rest, htmlbooklevel);

      var section = $('<div>').html(section_content).html();
    }

    return $('<div>').html(section).html();
  }

  function find_headings(content, parent_tag_name) {
    var content = $(content).clone().splice(1);
    var wrap = $('<div>').html(content);
    var heading_index = parseInt(parent_tag_name.substr(1));
    var subheadings = $(wrap).find('h' + (heading_index+1));

    if (heading_index == 6) {
      return false;
    } else if ($(wrap).find(parent_tag_name).length > 0) {
      console.log('found same level', parent_tag_name, $(wrap).find(parent_tag_name))
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
}