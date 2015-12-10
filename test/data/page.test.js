var chai = require('chai'),
    Page = require('data/page');

describe('Page', function() {

    var page;

    beforeEach(function() {
        page = Page.create();
    });

    it('Has length of the total length of rows', function() {
        var row1 = {length: 1},
            row2 = {length: 2};

        page.rows = [row1, row2];

        chai.assert.lengthOf(page, 3);
    });

});