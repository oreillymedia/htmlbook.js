// Check to see if one level of the parser is working.
describe('#0 Simplest HTML', function () {
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
describe('#1 One Heading Per Level', function () {
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

describe('#2 Two Headings Per Level', function () {
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
})