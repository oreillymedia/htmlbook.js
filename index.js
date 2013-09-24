var sys = require('sys'),
  fs = require('fs'),
  _ = require('underscore'),
  htmlparser = require('htmlparser2'),
  xml2js = require('xml2js'),
  xml_parser = new xml2js.Parser(),
  schema,
  elements;

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
      callback(dom)
    }
  });
  var parser = new htmlparser.Parser(handler);
  parser.write(raw_html);
  parser.done()
}

traverse = function (dom_tree, depth) {
  if (!existy(depth))
    depth = 0

  _.forEach(dom_tree, function (node) {
    if (existy(node.name))
      console.log(indentation(depth),  _.findWhere(elements, {name: node.name}));
    if (existy(node.children))
      traverse(node.children, depth + 1)
  });
}

htmlbook = function (input) {
  parse(input, traverse);
}

// When parsing finishes
xml_parser.addListener('end', function(result) {
  // save the result
  schema = result;

  elements = _.map(schema["xs:schema"]["xs:element"], function (x) {
    return x["$"]
  });

  // Read the source, start conversion
  fs.readFile("../htmlbook/samples/htmlbook.html", "utf-8", function (e,d) {
    htmlbook(d);
  });
});

// Start by parsing schema
fs.readFile("../HTMLBook/schema/htmlbook.xsd", function(err, data) {
  xml_parser.parseString(data);
});