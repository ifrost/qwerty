var Command = require('./command');

/**
 * @exports NewPage
 */
var NewPage = Command.extend({

    $meta: {
        type: 'newpage'
    }

});

module.exports = NewPage;