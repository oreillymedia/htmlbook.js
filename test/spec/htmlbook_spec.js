// Check to see if one level of the parser is working.
describe('#0 - One heading, two paragraphs', function () {
  var source_html, spec_html;

  beforeEach(function () {
    source_html = $('#example0').html();
    spec_html = $('#example0-spec').html().split("\n").join('');
  });

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
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
    var parsed = htmlbook($('<div>').html(source_html).html());
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
    var parsed = htmlbook($('<div>').html(source_html).html());
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
    var parsed = htmlbook($('<div>').html(source_html).html());
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

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).children());
    expect(parsed).toEqual(spec_html);
  });
});

describe('#5 - Wrapping Divs', function () {
  var source_html, spec_html;

  it("should not have <section>s inside of <div>s", function () {
  });
});

describe('#6 - Additional Arguments', function () {
  var source_html, spec_html;

  it("should accept {level: STRING} where STRING is a valid HTMLBook section level", function () {
  });

  it("should default book level to 'chapter'", function () {
  });

  it("should accept {fragment: false} and return a complete html document", function () {

  });

  it("should default to {fragment:true} and return a fragment starting with <h1> or <section>", function () {
  });
});

describe('#7 - Be Idempotent', function () {
  it("should recognize proper HTMLBook and pass over it.", function () {

  });
});