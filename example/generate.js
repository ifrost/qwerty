var TextSuite = require('../lib/suite/textsuite');

var text = 'line 1 blah blah\nline 2\nline 3';
var suite = TextSuite.create();

suite.generatePdf(text, 'file.pdf');