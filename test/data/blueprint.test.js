var chai = require('chai'),
    Blueprint = require('data/blueprint');

describe('Blueprint', function() {

    var blueprint;

    beforeEach(function() {
        blueprint = Blueprint.create();
    });

    it('Has length of the total length of all pages', function() {
        var page1 = {length: 4},
            page2 = {length: 6};

        blueprint.pages = [page1, page2];

        chai.assert.lengthOf(blueprint, 10);
    });

});