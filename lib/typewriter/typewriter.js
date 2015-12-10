var Protoplast = require('protoplast'),
    Text = require('./command/text'),
    GoTo = require('./command/goto'),
    NewLine = require('./command/newline'),
    NewPage = require('./command/newpage');

/**
 * @exports Typewriter
 */
var Typewriter = Protoplast.extend({

    /**
     * @param {Blueprint} blueprint
     * @returns {Command[]}
     */
    process: function(blueprint) {
        var commands = [];
        blueprint.pages.forEach(function(page){
            commands.push(NewPage.create());
            page.rows.forEach(function(row){
                row.columns.forEach(function(column){
                    commands.push(GoTo.create());
                    column.lines.forEach(function(line, index){
                        if (index > 0) {
                            commands.push(NewLine.create());
                        }
                        commands.push(Text.create(line));
                    });
                });
            });
        });
        return commands;
    }

});

module.exports = Typewriter;