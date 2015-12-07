var _ = require('lodash');

var Parser = require('./parser'),
    Token = require('../data/token'),
    TextUtil = require('../util/text');

/**
 * @exports TextParser
 */
var TextParser = Parser.extend({

    /**
     * Parses text and produces simple text tokens
     * @param {String} text
     */
    parse: function(text) {
        var lines = TextUtil.splitLines(text), tokens;

        tokens = _.filter(lines);

        tokens = tokens.map(function(line){
            return Token.create('text', line);
        });

        return tokens;
    }

});

module.exports = TextParser;