var chai = require('chai');
var TextParser = require('../../lib/parser/textparser');

describe('TextParser', function(){

    var parser;

    beforeEach(function(){
        parser = TextParser.create();
    });

    it('creates one token per line', function()
    {
        var tokens = parser.parse('line1\nline2\nline3');
        chai.assert.lengthOf(tokens, 3);
    });

    it('ignores empty lines', function() {
        var tokens = parser.parse('line1\nline2\n\n\nline3\n');
        chai.assert.lengthOf(tokens, 3);
    });

});