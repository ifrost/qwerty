var Interpreter = require('./interpreter'),
    TextUtil = require('../util/text'),
    Blueprint = require('../data/blueprint'),
    Column = require('../data/column'),
    Row = require('../data/row'),
    Page = require('../data/page');

var TextInterpreter = Interpreter.extend({

    /**
     * @param {Token[]} tokens
     * @param {Config}  config
     * @returns {Blueprint}
     */
    process: function(tokens, config) {
        var blueprint = Blueprint.create();
        var page = Page.create();
        var column = Column.create();
        var row = Row.create();

        blueprint.pages = [page];
        page.rows = tokens.map(function(token){
            row = Row.create();
            column = Column.create();
            row.columns = [column];
            column.tokens = [token];
            return row;
        });

        this.breakLines(blueprint, config);
        this.breakToPages(blueprint, config);

        return blueprint;
    },

    /**
     * @param {Blueprint} blueprint
     * @returns {Blueprint}
     */
    breakLines: function(blueprint, config) {
        var lines;

        blueprint.pages.forEach(function(page){
            page.rows.forEach(function(row){
                row.columns.forEach(function(column){
                    column.lines = [];
                    column.tokens.forEach(function(token){
                        lines = TextUtil.splitText(token.content, config.characterPerLine);
                        token.lines = lines;
                        column.lines = column.lines.concat(token.lines);
                    });
                });
            });
        });

        return blueprint;
    },

    /**
     * @param {Blueprint} blueprint
     * @returns {Blueprint}
     */
    breakToPages: function(blueprint, config) {
        blueprint.pages = this.breakPage(blueprint.pages[0], config);
        return blueprint;
    },

    breakPage: function(page, config) {
        var newPage;
        if (page.length > config.linesPerPage) {
            newPage = Page.create();

            while (page.rows[0].length + newPage.length <= config.linesPerPage) {
                newPage.rows.push(page.rows.shift());
            }

            return [newPage].concat(this.breakPage(page, config));
        }
        else {
            return [page];
        }
    }

});

module.exports = TextInterpreter;