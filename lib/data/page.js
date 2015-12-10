var Protoplast = require('protoplast');

/**
 * @exports Page
 */
var Page = Protoplast.extend({

    /**
     * @member {Row[]}
     */
    rows: null,

    $create: function() {
        this.rows = [];
    },

    length: {
        get: function() {
            return this.rows.reduce(function(length, row) {return length + row.length}, 0);
        }
    }

});

module.exports = Page;