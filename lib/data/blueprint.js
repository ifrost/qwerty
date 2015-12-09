var Protoplast = require('protoplast');

/**
 * @exports Blueprint
 */
var Blueprint = Protoplast.extend({

    /**
     * @member {Page[]}
     */
    pages: null,

    $create: function() {
        this.pages = [];
    }

});

module.exports = Blueprint;