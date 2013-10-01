var htmlbook = require('../htmlbook');
var fs = require('fs');

describe("htmlbook", function () {
  it("should return an error when given no input", function (done) {
    var test = function () {
      htmlbook().parse();
    }

    expect(test).toThrow(new Error("No content"));
    done();
  });

  it("should insert an HTMLBook Chapter in the document", function (done) {
    expect(htmlbook("# Title\n\nsome line of stuff").parse()).toEqual("\n<section data-type='chapter'>\n<h1>Title</h1>\n<p>some line of stuff</p>\n</section>");
    done();
  });

  it("should convert a document with all section levels", function (done) {
    fs.readFile("spec/documents/all_headings.md", "utf-8", function (err, data) {
      if (err) throw new Error("Error opening the document");

      expect(htmlbook(data).parse()).toEqual("\n<section data-type='chapter'>\n<h1>Chapter Title</h1>\n\n<section data-type='sect1'>\n<h1>Heading 1</h1>\n\n<section data-type='sect2'>\n<h2>Heading 2</h2>\n\n<section data-type='sect3'>\n<h3>Heading 3</h3>\n\n<section data-type='sect4'>\n<h4>Heading 4</h4>\n\n<section data-type='sect5'>\n<h5>Heading 5</h5>\n\n<section data-type='sect6'>\n<h6>Heading 6</h6>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>");
      done();
    });
  });

  // it("should be idempotent");
  // it("should also accept HTML documents");
  // it("should properly render self closing tags");
});