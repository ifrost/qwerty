var chai = require('chai');

var TextUtil = require('../../lib/util/text');

describe('TextUtil', function(){

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