var chai = require('chai');

var TextUtil = require('util/text');

describe('TextUtil', function(){

    describe('splitLines', function(){
        it('supports Windows EOL', function() {
            var lines = TextUtil.splitLines('line1\nline2');
            chai.assert.lengthOf(lines, 2);
        });

        it('supports Mac EOL', function() {
            var lines = TextUtil.splitLines('line1\rline2');
            chai.assert.lengthOf(lines, 2);
        });

        it('supports DOS EOL', function() {
            var lines = TextUtil.splitLines('line1\r\nline2');
            chai.assert.lengthOf(lines, 2);
        });
    });

    describe('splitText', function(){

        it('returns one line for a short text', function(){
            var lines = TextUtil.splitText('12345', 5);
            chai.assert.lengthOf(lines, 1);
            chai.assert.strictEqual(lines[0], '12345');
        });

        it('omits whitespaces', function(){
            var lines = TextUtil.splitText('12345   ', 5);
            chai.assert.lengthOf(lines, 1);
            chai.assert.strictEqual(lines[0], '12345');
        });

        it('splits between words', function(){
            var lines = TextUtil.splitText('123 123 5 123', 5);
            chai.assert.lengthOf(lines, 3);
            chai.assert.strictEqual(lines[0], '123');
            chai.assert.strictEqual(lines[1], '123 5');
            chai.assert.strictEqual(lines[2], '123');
        });

    });


});