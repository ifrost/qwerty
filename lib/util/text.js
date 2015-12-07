var Protoplast = require('protoplast');

/**
 * @exports TextUtil
 */
var TextUtil = Protoplast.extend({

    /**
     * Split text to lines, supports Win, Mac and DOS EOL
     * @param {String} text
     * @returns {String[]}
     */
    splitLines: function(text) {
        return text.split(/\r\n|\n|\r/);
    }

});

module.exports = TextUtil;