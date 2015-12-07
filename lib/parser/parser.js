var Protoplast = require('protoplast');

/**
 * @exports Parser
 */
var Parser = Protoplast.extend({

    /**
     * Parse an object and produce list of tokens
     *
     * @method
     * @param {Object} input - object to be parsed
     * @returns {Token[]}
     */
    parse: null

});

module.exports = Parser;