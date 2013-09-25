var sys = require('sys'),
  fs = require('fs'),
  util = require('util'),
  _ = require('underscore'),
  htmlparser = require('htmlparser2'),
  xml2js = require('xml2js'),
  xml_parser = new xml2js.Parser(),
  schema,
  elements,
  headers = ['h1','h2','h3','h4','h5','h6'];

var existy = function (x) {
  return x != null;
}

var indentation = function (n) {
  return _.reduce(_.range(n), function (indent, x) {
    return indent + "  "
  }, "")
}

var parse = function (raw_html, callback) {
  var handler = new htmlparser.DomHandler(function (error, dom) {
    if (error){
      console.log('error dog'); process.exit(1)
    } else {
      console.log(callback(dom))
    }
  });
  var parser = new htmlparser.Parser(handler);
  parser.write(raw_html);
  parser.done()
}

var attribs_to_string = function (obj) {
  if (!existy(obj))
    return ""

  return _.reduce(_.pairs(obj), function (memo, v) {
    return memo + " " + v[0] + "='" + v[1]+ "'"
  }, "");
}

var open_tag = function (node) {
  return "<" + node.name + attribs_to_string(node.attribs) + ">"
}

var close_tag = function (node) {
  return "</" + node.name + ">"
}

var traverse = function (dom_tree, depth) {
  if (!existy(depth))
    depth = 1

  output = ""

  _.forEach(dom_tree, function (node, i) {
    if (_.contains(headers, node.name))
      output += "\n++++++++++++++++++++++++++++++++++++\n"

    if (node.type === "text") {
      output += node.data
    } else if (existy(node.children))
      output += open_tag(node) + traverse(node.children, depth + 1) + close_tag(node)
  });
  return output;
}

var htmlbook = function (input) {
  parse(input, traverse);
}

// When parsing finishes
xml_parser.addListener('end', function(result) {
  // save the result
  schema = result;
  elements = schema["xs:schema"]["xs:element"];

  // Read the source, start conversion
  fs.readFile("test/documents/test.html", "utf-8", function (e,d) {
    htmlbook(d);
  });
});

// Start by parsing schema
fs.readFile("../HTMLBook/schema/htmlbook.xsd", function(err, data) {
  xml_parser.parseString(data);
});