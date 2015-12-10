var Command = require('./command');

/**
 * @exports Text
 */
var Text = Command.extend({

    $meta: {
        type: 'text'
    },

    text: null,

    $create: function(text) {
        this.text = text || '';
    }

});

module.exports = Text;