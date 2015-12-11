var chai = require('chai'),
    Config = require('data/config'),
    Token = require('data/token'),
    TextInterpreter = require('interpreter/textinterpreter');

describe('TextInterpreter', function() {

    var inter;

    beforeEach(function() {
        inter = TextInterpreter.create();
    });

    it('Simple case', function() {
        var tokens = [
            Token.create('text','12345 12345 12345'),
            Token.create('text','12345 12345 12345'),
            Token.create('text','12345 12345 12345')
        ];

        var config = Config.create();
        config.charactersPerLine = 5;
        config.linesPerPage = 3;

        var blueprint = inter.process(tokens, config);

        chai.assert.lengthOf(blueprint, 9);
        chai.assert.lengthOf(blueprint.pages, 3);
        chai.assert.lengthOf(blueprint.pages[0].rows, 1);
        chai.assert.lengthOf(blueprint.pages[0].rows[0].columns, 1);
        chai.assert.lengthOf(blueprint.pages[0].rows[0].columns[0].lines, 3);
        chai.assert.equal(blueprint.pages[0].rows[0].columns[0].lines[0], "12345");
        chai.assert.equal(blueprint.pages[0].rows[0].columns[0].lines[1], "12345");
        chai.assert.equal(blueprint.pages[0].rows[0].columns[0].lines[2], "12345");
    });

});