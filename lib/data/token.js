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
     * @member {Number}
     */
    content: null

});

module.exports = Token;