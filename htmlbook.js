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
    var wrap = $('<div>').append(content);
    var children = wrap.children();

    // parse the first element, hoping for a heading, and assigning it the
    // proper tag based on the htmlbook level
    var first_element = deconstruct_heading(children.first(), htmlbooklevel);
    var section_content;

    // check to see if there are subheadings inside here.
    console.log(children.find('h2'));

    if (is_deep(content, first_element.tag_name)) {
      // section_content = make_section()
      return "OYEZ"
    } else {
      section_content = content.splice(1);
    }

    var section = $('<section data-type="' + htmlbooklevel.name + '">');

    return section.append(first_element.html).append(content);
  }

  function is_deep(content, parent_tag_name) {
    var heading_index = parseInt(parent_tag_name.substr(1));

    if (heading_index == 6) {
      return false;
    } else {
      return $(content).find('h' + heading_index++);
    }
  }

  function deconstruct_heading (heading, htmlbooklevel) {
    var tag_name = heading.prop('tagName')
    if (tag_name.match(/H[1-6]/) == null) {
      return false;
    } else {
      return {
        'tag_name': tag_name,
        'heading': htmlbooklevel.heading,
        'level': htmlbooklevel.name,
        'content': heading.html(),
        'html': $('<' + htmlbooklevel.heading + '>').html(heading.html())
      }
    }
  }

  // Private: this method is used to accept a chunk of html and drill down to .the next heading level. From Chapter into sect1
  //
  // current_htmlbook_level - String i.e. 'chapter', 'sect1', 'sect2'
  // current_h - String i.e. 'h1', 'h2'
  // html - jQuery object of HTML elements
  function next_level (current_htmlbook_level, current_h, html) {
    var current_h_number = current_h.substr(1);
    var next_h_number = parseInt(current_h_number) + 1;
    var next_h = 'h' + next_h_number;
    var next_html_book_level = htmlbook_levels[htmlbook_levels.indexOf(current_htmlbook_level) + 1];

    // There are only 6 headers available in HTML.
    if (next_h_number > 6) {
      return html;
    }

    var parent_content = $(html).first().nextUntil(next_h);

    var title_el = $(html[parent_content.length + 1]);
    var title = title_el.html();

    var sect = $('<section data-type="' + next_html_book_level + '">')
    var sect_body = title_el.nextUntil(next_h);

    var temp_div = $('<div>');

    sect.append('<h1>' + title + '</h1>').append(sect_body);
    temp_div.append(parent_content);
    temp_div.append(sect);

    return temp_div.html();
  }
}