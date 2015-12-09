var Protoplast = require('protoplast');

/**
 * @exports Row
 */
var Row = Protoplast.extend({

    /**
     * @member {Column[]}
     */
    columns: null,

    $create: function() {
        this.columns = [];
    }

});

module.exports = Row;