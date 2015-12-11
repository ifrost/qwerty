var TextParser = require('../lib/parser/textparser'),
    TextInterpreter = require('../lib/interpreter/textinterpreter'),
    Config = require('../lib/data/config'),
    Typewriter = require('../lib/typewriter/typewriter');

var parser = TextParser.create();
var inter = TextInterpreter.create();
var tw = Typewriter.create();
var config = Config.create();

config.linesPerPage = 10;
config.charactersPerLine = 10;

var text = 'line 1 blah blah\nline 2\nline 3';
var tokens = parser.parse(text);
var blueprint = inter.process(tokens, config);
var commands = tw.process(blueprint);
