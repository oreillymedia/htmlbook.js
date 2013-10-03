var xml2js = require('xml2js'),
  fs = require('fs'),
  xml_parser = new xml2js.Parser();

// When parsing finishes
xml_parser.addListener('end', function(result) {
  // save the result
  fs.writeFile("schema.js", "module.exports = " + JSON.stringify(result, null, 2));
});

// Start by parsing schema
fs.readFile("../HTMLBook/schema/htmlbook.xsd", function(err, data) {
  xml_parser.parseString(data);
});