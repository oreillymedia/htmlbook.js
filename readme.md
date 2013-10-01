# htmlbook.js

Converts Markdown to [HTMLBook](https://github.com/oreillymedia/htmlbook).

## Installation

Install with npm: `npm install -g htmlbook`

## Usage

```
var input = "MARKDOWN CONTENT"
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

- fragment: _false_ or true
- level: _chapter_ or book
- debug: boolean -- default for command line is 'false'