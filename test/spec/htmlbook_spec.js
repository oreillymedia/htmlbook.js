// Check to see if one level of the parser is working.
describe('#0 - One heading, two paragraphs', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    source_html = $('#example0').html();
    spec_html = $('#example0-spec').html().split("\n").join('');
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
    expect(parsed).toEqual(spec_html);
  });
});

// Nested but a single branch.
describe('#1 - Three Headings One Heading Per Level', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    source_html = $('#example1').html();
    spec_html = $('#example1-spec').html().split("\n").join('');
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
    expect(parsed).toEqual(spec_html);
  });
});

describe('#2 - Two Headings Per Level, each with child content.', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #2\n#########")
    source_html = $('#example2').html();
    spec_html = $('#example2-spec').html().split("\n").join('');
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
    expect(parsed).toEqual(spec_html);
  });
});

describe('#3 - Two Headings Per Level, each with child content.', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #3\n#########")
    source_html = $('#example3').html();
    spec_html = $('#example3-spec').html().split("\n").join('');
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
    expect(parsed).toEqual(spec_html);
  });
});

describe('#4 - Parser should accept both strings and jQuery objects.', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    console.log("#########\nTEST #4\n#########")
    source_html = $('#example3').html();
    spec_html = $('#example3-spec').html().split("\n").join('');
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).children());
    expect(parsed).toEqual(spec_html);
  });
});
