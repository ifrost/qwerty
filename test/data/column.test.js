var chai = require('chai'),
    Column = require('data/column');

describe('Column', function() {

    var column;

    beforeEach(function() {
        column = Column.create();
    });

    it('Has length of lines', function() {
        var lines = ['line1', 'line2', 'line3'];
        column.lines = lines;
        chai.assert.lengthOf(column, lines.length);
    });

});