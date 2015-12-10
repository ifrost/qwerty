var Protoplast = require('protoplast');

/**
 * @exports Command
 */
var Command = Protoplast.extend({

    $create: function() {
        this.type = this.$meta.type;
    }

});

module.exports = Command;