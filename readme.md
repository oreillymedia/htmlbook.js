# htmlbook.js

Converts Markdown to [HTMLBook](https://github.com/oreillymedia/htmlbook).

## Installation

Install with npm: `npm install -g htmlbook`

## Usage

### Node.js

Within Node, **htmlbook.js** works on strings.

```javascript
var htmlbook = require('htmlbook');
var htmlbook_output = htmlbook("source content").parse();
```

To use **htmlbook.js** with a file, in Node.js do the following:

```javascript
var fs = require('fs');
var htmlbook = require('htmlbook');

var htmlbook_output;

fs.readFile('path/to/file.md', 'utf-8', function (error, data) {
  if (error)
    return error;

  htmlbook_output = htmlbook(data).parse();
})
```

### Command Line

```bash
$ htmlbook -s SOURCE_FILE -o OUTPUT_FILE
```

Additionally, type `$ htmlbook --help` for all options.

## Options

Below is a list of available options, default value is emphasized.

- fragment: _false_ or true
- level: _chapter_ or book
- debug: boolean -- default for command line is 'false'