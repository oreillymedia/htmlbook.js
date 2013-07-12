// Check to see if one level of the parser is working.
describe('Simplest HTML', function () {
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
describe('One Heading Per Level', function () {
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

describe('Two Headings Per Level', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    $.get('example2.html').done(function(res) {
      source_html = res;
    });

    $.get('example2-htmlbook.html').done(function(res) {
      spec_html = res.split("\n").join('');
    })
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
    expect(parsed).toEqual(spec_html);
  });
})