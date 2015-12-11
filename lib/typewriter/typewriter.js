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
            commands.push(GoTo.create());
            page.rows.forEach(function(row, rowIndex){
                row.columns.forEach(function(column){
                    column.lines.forEach(function(line, lineIndex){
                        if (lineIndex > 0) {
                            commands.push(NewLine.create());
                        }
                        commands.push(Text.create(line));
                    });
                });
                if (rowIndex !== page.rows.length - 1) {
                    commands.push(NewLine.create());
                }
            });
        });
        return commands;
    }

});

module.exports = Typewriter;