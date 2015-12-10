var Command = require('./command');

/**
 * @exports NewLine
 */
var NewLine = Command.extend({

    $meta: {
        type: 'newline'
    }

});

module.exports = NewLine;