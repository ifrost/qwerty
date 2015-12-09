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
    }

});

module.exports = Page;