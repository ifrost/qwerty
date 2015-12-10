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
    },

    /**
     * Split a test into lines so each line has maxPerLine number of characters
     * The split happens only after a word (if possible)
     *
     * @param {String} text
     * @param {Number} maxPerLine
     * @returns {String[]}
     */
    splitText: function (text, maxPerLine) {

        var pointer, result, otherResult;

        text = text.trim();

        if (!text) {
            result = [];
        }
        else if (text.length <= maxPerLine) {
            result = [text];
        }
        else {
            pointer = text.substr(0, maxPerLine + 1).lastIndexOf(" ");

            if (pointer === -1) {
                pointer = maxPerLine - 1;
            }

            otherResult = TextUtil.splitText(text.substr(pointer + 1), maxPerLine);
            result = [text.substr(0, pointer)].concat(otherResult);
        }

        return result;
    }

});

module.exports = TextUtil;