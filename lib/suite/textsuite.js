var Protoplast = require('protoplast'),
    TextParser = require('../parser/textparser'),
    TextInterpreter = require('../interpreter/textinterpreter'),
    Config = require('../data/config'),
    Typewriter = require('../typewriter/typewriter'),
    PDFMaker = require('../pdf/pdfmaker');

/**
 * @exports TextSuite
 */
var TextSuite = Protoplast.extend({

    generatePdf: function(text, filename, callback) {

        var parser = TextParser.create();
        var inter = TextInterpreter.create();
        var tw = Typewriter.create();
        var config = Config.create();
        var maker = PDFMaker.create();

        callback = callback || function(){};

        config.linesPerPage = 10;
        config.charactersPerLine = 10;

        var tokens = parser.parse(text);
        var blueprint = inter.process(tokens, config);
        var commands = tw.process(blueprint);

        maker.generate(commands, callback, filename);

    }

});

module.exports = TextSuite;