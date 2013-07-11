htmlbook = function (source) {
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

  // Ok, so we are inside an H1 block right now, let's look for h2's
  before_h2 = $(h1_children).first().nextUntil('h2');
  // before_h2 is all elements until the next h2, so our h2 is one more than the length of before_h2
  h2 = $(h1_children[before_h2.length+1])

  sect1_body = h2.nextUntil('h2');

  sect1 = $('<section data-type="sect1">').append(h2);
  sect1.append(sect1_body);

  chapter.append(before_h2);
  chapter.append(sect1);

  return chapter;
}