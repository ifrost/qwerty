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
    },

    length: {
        get: function() {
            return this.pages.reduce(function(length, page) {return length + page.length}, 0);
        }
    }

});

module.exports = Blueprint;