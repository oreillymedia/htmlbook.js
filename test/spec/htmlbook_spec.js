// Check to see if one level of the parser is working.
describe('#0 - One heading, two paragraphs', function () {
  var source_html, spec_html;

  beforeEach(function () {
    source_html = $('#example0').html();
    spec_html = $('#example0-spec').html().split("\n").join('');
  });

  it("should convert to be equal to the sample", function () {
    var parsed = HTMLBook($('<div>').html(source_html).html()).parse();
    expect(parsed).toEqual(spec_html);
  });
});

// Nested but a single branch.
describe('#1 - Three Headings One Heading Per Level', function () {
  var source_html, spec_html;

  beforeEach(function () {
    source_html = $('#example1').html();
    spec_html = $('#example1-spec').html().split("\n").join('');
  });

  it("should convert to be equal to the sample", function () {
    var parsed = HTMLBook($('<div>').html(source_html).html()).parse();
    expect(parsed).toEqual(spec_html);
  });
});

describe('#2 - Two Headings Per Level, each with child content.', function () {
  var source_html, spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #2\n#########")
    source_html = $('#example2').html();
    spec_html = $('#example2-spec').html().split("\n").join('');
  });

  it("should convert to be equal to the sample", function () {
    var parsed = HTMLBook($('<div>').html(source_html).html()).parse();
    expect(parsed).toEqual(spec_html);
  });
});

describe('#3 - Two Headings Per Level, each with child content.', function () {
  var source_html, spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #3\n#########")
    source_html = $('#example3').html();
    spec_html = $('#example3-spec').html().split("\n").join('');
  });

  it("should convert to be equal to the sample", function () {
    var parsed = HTMLBook($('<div>').html(source_html).html()).parse();
    expect(parsed).toEqual(spec_html);
  });
});

describe('#4 - Parser should accept both strings and jQuery objects.', function () {
  var source_html, spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #4\n#########");
    source_html = $('#example3').html();
    spec_html = $('#example3-spec').html().split("\n").join('');
  });

  it("should accept a string of HTML", function () {
    console.log('source type:', typeof source_html);
    var parsed = HTMLBook(source_html).parse();
    expect(parsed).toEqual(spec_html);
  });

  it("should accept a jQuery object", function () {
    var source = $('<div>').html(source_html).children();
    console.log('source type:', typeof source);
    var parsed = HTMLBook(source).parse();
    expect(parsed).toEqual(spec_html);
  });
});

describe('#5 - Additional Arguments', function () {
  var source_html, spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #5\n#########");
    source_html = $('#example5').html();
  });

  it("should accept {level: STRING} where STRING is a valid HTMLBook section level", function () {
    spec_html = $('#example5-spec-book').html().split("\n").join('');

    var output = HTMLBook(source_html).parse({'level':'book'});
    expect(output).toEqual(spec_html);
  });

  it("should default book level to 'chapter'", function () {
    spec_html = $('#example5-spec-chapter').html().split("\n").join('');
    var output = HTMLBook(source_html).parse();

    expect(output).toEqual(spec_html);
  });

  it("should accept {fragment: false} and return a complete html document", function () {
    spec_html = $('#example5-spec-complete').html().split("\n").join('');
    var output = HTMLBook(source_html).parse({'fragment': false});
    expect(output).toEqual(spec_html);
  });
});

describe('#6 - Allow Markdown Input', function () {
  var source_html, spec_html;

  it("should accept markdown as an input and convert it", function () {
    spec_html = $('#example3-spec').html().split("\n").join('');
    source_html = $('#example6').html();

    var output = HTMLBook(source_html).parse({'sourceFormat':'markdown'});
    expect(output).toEqual(spec_html);
  });
});

// describe('#6 - Divs', function () {
//   var source_html, spec_html;

//   it("should not have <section>s inside of <div>s", function () { });

//   it("should ensure that headings inside of <div>s meet spect", function () {});
// });

// describe('#7 - Be Idempotent', function () {
//   it("should recognize proper HTMLBook and pass over it.", function () {
//   });
// });