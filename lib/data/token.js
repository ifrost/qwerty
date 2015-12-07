var Protoplast = require('protoplast');

/**
 * @exports Token
 */
var Token = Protoplast.extend({

    /**
     * @member {String}
     */
    type: null,

    /**
     * @member {String}
     */
    content: null,

    /**
     *
     * @param {String} type
     * @param {String} content
     */
    $create: function(type, content) {
        this.type = type;
        this.content = content;
    }

});

module.exports = Token;