// sect = {
//   htmlbook_level: 'sect1',
//   title: Section Heading,
//   content: {
//     HTMLELEMENTS
//   },
//   children: [sects]
// }

htmlbook = function (source) {
  var htmlbook_levels = [
    'book',
    'chapter',
    'sect1',
    'sect2'
  ]

  // Source should be a string of html. Put it in a <body> element to enable traversing with jQuery.
  var body = $('<body>').append(source);
  children = body.children();

  // the first child must be an h1
  first_element = $(body.children().first())

  // Exit with an error if the first element is not an H1.
  if (first_element.prop("tagName") != "H1") {
    return "Error, the first child must be an H1";
  }

  // rename the first element
  h1 = first_element;
  h1_children = h1.nextUntil('h1');
  chapter = $('<section data-type="chapter">').append(h1);

  sect1 = next_level('chapter', 'h1', h1_children);
  chapter.append(sect1);

  return chapter;

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