htmlbook = function (source) {
  // source in this case is a string.
  body = $('<body>').append(source)

  var children = body.children();

  // the first child must be an h1
  var first_element = $(body.children().first())

  if (children[0].tagName == "H1") {
    chapter = {title: first_element.html(), content: children.first().nextUntil('h2')}
    return chapter;
  } else {
    return "Error, the first child must be an H1";
  }
}