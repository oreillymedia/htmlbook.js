// Check to see if one level of the parser is working.
describe('Simplest HTML', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    $.get('example0.html').done(function(res) {
      source_html = res;
    });

    $.get('example0-htmlbook.html').done(function(res) {
      spec_html = res.split("\n").join('');
    })
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).html());
    console.log(parsed)
    expect(parsed).toEqual(spec_html);
  });
});

// Nested but a single branch.
describe('One Heading Per Level', function () {
  var source_html;
  var spec_html;

  beforeEach(function () {
    $.get('example1.html').done(function(res) {
      source_html = res;
    });

    $.get('example1-htmlbook.html').done(function(res) {
      spec_html = res;
    })
  })

  it("should convert to be equal to the sample", function () {
    var parsed = htmlbook($('<div>').html(source_html).contents());
    expect(parsed).toEqual(spec_html);
  });
})