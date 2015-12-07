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

    it('creates tokens with "text" type', function(){
        var tokens = parser.parse('line1\nline2');
        chai.assert.strictEqual(tokens[0].type, 'text');
        chai.assert.strictEqual(tokens[1].type, 'text');
    });

    it('sets line without EOL as content', function(){
        var tokens = parser.parse('line1\nline2');
        chai.assert.strictEqual(tokens[0].content, 'line1');
        chai.assert.strictEqual(tokens[1].content, 'line2');
    });

});