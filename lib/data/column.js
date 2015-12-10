var Protoplast = require('protoplast');

/**
 * @exports Column
 */
var Column = Protoplast.extend({

    /**
     * @member {String[]}
     */
    lines: null,

    $create: function() {
        this.lines = [];
    },

    length: {
        get: function() {
            return this.lines.length;
        }
    }

});

module.exports = Column;