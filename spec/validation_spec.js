var htmlbook = require('../htmlbook');
var fs = require('fs');
var exec = require('child_process').exec;

jasmine.getEnv().defaultTimeoutInterval = 100000;

var convert_and_validate = function (file_name, callback) {
  fs.readFile(file_name, "utf-8", function (err, source) {

    html =  htmlbook(source).parse({"complete_html": true, "title": "Test"})

    fs.writeFile("spec/documents/validation.html", html, function () {
      exec("xmllint --noout --schema ../HTMLBook/schema/htmlbook.xsd spec/documents/validation.html", function (err, stdout, stderr) {
        expect(stderr).toEqual("spec/documents/validation.html validates\n");
        fs.unlink("spec/documents/validation.html");
        callback();
      });
    })
  });
}

describe("htmlbook validations", function () {
  it("should convert all_headings.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/all_headings.md", done);
  });

  it("should convert test.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/test.md", done);
  });

  it("should convert mixins.md to valid HTMLBook", function (done) {
    convert_and_validate("spec/documents/mixins.md", done);
  });
});