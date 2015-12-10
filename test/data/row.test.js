var chai = require('chai'),
    Row = require('data/row');

describe('Row', function() {

    var row;

    beforeEach(function() {
        row = Row.create();
    });

    it('Has length of the longest column', function() {
        var column1 = {length: 3},
            column2 = {length: 2};

        row.columns = [column1, column2];

        chai.assert.lengthOf(row, 3);
    });

});