# htmlbook.js

Parses HTML into [HTMLBook](https://github.com/oreillymedia/htmlbook).

## Setup

### Browser

Add the htmlbook.js script to a page with jQuery (tested with jQuery 1.10.2) and [Marked](https://github.com/chjj/marked).

### Node.js

Install with npm: `npm install -g htmlbook`

## Usage

### Browser & Node.js

For both the browser and Node.js, usage is the same

```
var input = "HTML TEXT OR JQUERY OBJECT"
var output = HTMLBook(input).parse(opts);
```

### Command Line

Installing this package with npm and the `-g` flag will install an executable.

```
$ htmlbook -s SOURCE_FILE -o OUTPUT_FILE
```

Additionally, type `$ htmlbook --help` for all options.

### Opts

Below is a list of available options, default value is emphasized.

- sourceFormat: _html_ or markdown
- fragment: _false_ or true
- level: _chapter_ or book