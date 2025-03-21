var htmlbook = require('../htmlbook');
var fs = require('fs');
var marked = require('marked');
marked.setOptions({gfm: true});

describe("htmlbook", function () {
  it("should return an error when given no input", function (done) {
    var test = function () {
      htmlbook().parse();
    }

    expect(test).toThrow(new Error("No content"));
    done();
  });

  it("should insert an HTMLBook Chapter in the document", function (done) {
    expect(htmlbook("# Title\n\nsome line of stuff").parse()).toEqual("<section data-type='chapter'>\n<h1>Title</h1>\n\n<p>some line of stuff</p>\n</section>");
    done();
  });

  it("should convert a document with all section levels", function (done) {
    fs.readFile("spec/documents/all_headings.md", "utf-8", function (err, source) {
      if (err) throw new Error("Error opening source document");

      fs.readFile("spec/documents/all_headings.html", "utf-8", function (err, html) {
        if (err) throw new Error("Error opening html document");

        expect(htmlbook(source).parse()).toEqual(html);
        done();
      });
    });
  });

  it("should not mangle html elements without children", function (done) {
    fs.readFile("spec/documents/mixins.md", "utf-8", function (err, source) {
      if (err) throw new Error("Error opening the source document");

      fs.readFile("spec/documents/mixins.html", "utf-8", function (err, html) {
        if (err) throw new Error("Error opening html document");

        expect(htmlbook(source).parse()).toEqual(html);
        done();
      });
    });
  });

  it("should return complete HTML documents when passed the option", function (done) {
    fs.readFile("spec/documents/all_headings.md", "utf-8", function (err, source) {
      if (err) throw new Error("Error opening source document");

      fs.readFile("spec/documents/all_headings_complete.html", "utf-8", function (err, html) {
        if (err) throw new Error("Error opening html document");

        expect(htmlbook(source).parse({"complete_html": true, "title": "Given Title"})).toEqual(html);
        done();
      });
    });
  });

  it("should render code blocks from Markdown as <pre> tags. And escape <, > & &.", function (done) {
    fs.readFile("spec/documents/code.md", "utf-8", function (err, source) {
      if (err) throw new Error("Error opening source document");
      var result = htmlbook(source).parse();

      fs.readFile("spec/documents/code.html", "utf-8", function (err, html) {
        expect(result).toEqual(html);
        done();
      });
    });
  });

  it("should not parse html tags as markdown", function (done) {
    fs.readFile("spec/documents/markup.md", "utf-8", function (err, source) {
      if (err) throw new Error("Error opening source document");
      var result = htmlbook(source).parse();

      fs.readFile("spec/documents/markup.html", "utf-8", function (err, html) {
        expect(result).toEqual(html);
        done();
      });
    });
  });

  it("should add ids to headers", function (done) {
    fs.readFile("spec/documents/ids.md", "utf-8", function (err, source) {
      if (err) throw new Error("Error opening source document");
      var result = htmlbook(source).parse();

      fs.readFile("spec/documents/ids.html", "utf-8", function (err, html) {
        expect(result).toEqual(html);
        done();
      });
    });
  });

  // it("should throw an error when no title present in complete mode.")

  it("should handle CDATA", function (done) {
    expect(htmlbook("<pre><![CDATA[ </body> ]]></pre>").parse()).toEqual("<pre><![CDATA[ </body> ]]></pre>");
    done();
  });
});
