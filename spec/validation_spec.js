var htmlbook = require('../htmlbook');
var fs = require('fs');
var exec = require('child_process').exec;
const tmp = require('tmp');

tmp.setGracefulCleanup();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

var convert_and_validate = function (file_name, callback) {
  tmp.file((err, path, _) => {
    if (err) throw err;
    fs.readFile(file_name, "utf-8", function (err, source) {
      if (err) throw err;

      html = htmlbook(source).parse({ "complete_html": true, "title": "Test" })

      fs.writeFile(`${path}.html`, html, function () {
        exec(`xmllint --noout --schema ../HTMLBook/schema/htmlbook.xsd ${path}.html`, function (err, _stdout, stderr) {
          if (err) throw err;
          expect(stderr).toEqual(`${path}.html validates\n`);
          callback();
        });
      })
    });

  }

  )
}

describe("htmlbook validations", function () {
  xit("BBEPart2", function (done) {
    convert_and_validate("spec/samples/BBEPart2.md", done)
  })

  xit("streams", function (done) {
    convert_and_validate("spec/samples/streams.md", done)
  })

  xit("artofnode", function (done) {
    convert_and_validate("spec/samples/artofnode.md", done)
  })

  xit("dataviz tech", function (done) {
    convert_and_validate("spec/samples/dataviz_tech.md", done)
  })

  xit("dataviz data", function (done) {
    convert_and_validate("spec/samples/dataviz_data.md", done)
  })

  it("should convert all_headings.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/all_headings.md", done);
  });

  it("should convert test.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/test.md", done);
  });

  it("should convert mixins.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/mixins.md", done);
  });

  it("should convert code.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/code.md", done);
  });

  it("should convert math.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/math.md", done);
  });

  it("should convert opengovernment spec", function (done) {
    convert_and_validate("../HTMLBook/samples/markdown/open_government_sample.md", done);
  });
});
