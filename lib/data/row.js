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
    },

    length: {
        get: function() {
            var columnLengths = this.columns.map(function(column){return column.length});
            return Math.max.apply(null, columnLengths);
        }
    }

});

module.exports = Row;