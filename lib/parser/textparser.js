var _ = require('lodash');

var Parser = require('./parser');
var Token = require('../data/token');
var TextUtil = require('../util/text');

/**
 * @exports TextParser
 */
var TextParser = Parser.extend({

    /**
     * Parses text and produces simple text tokens
     * @param {String} text
     */
    parse: function(text) {
        var token, lines = TextUtil.splitLines(text), tokens;

        tokens = _.filter(lines);

        token = tokens.map(function(line){
            token = Token.create();
            token.type = 'text';
            token.content = line;
            return token;
        });

        return tokens;
    }

});

module.exports = TextParser;