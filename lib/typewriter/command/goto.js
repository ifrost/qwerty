var Command = require('./command');

/**
 * @exports GoTo
 */
var GoTo = Command.extend({

    $meta: {
        type: 'goto'
    },

    x: 0,

    y: 0,

    $create: function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

});

module.exports = GoTo;