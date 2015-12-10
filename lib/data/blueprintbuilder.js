var Protoplast = require('protoplast'),
    Blueprint = require('../data/blueprint'),
    Column = require('../data/column'),
    Row = require('../data/row'),
    Page = require('../data/page');

/**
 * @exports BlueprintBuilder
 */
var BlueprintBuilder = Protoplast.extend({

    blueprint: null,

    lastPage: {
        get: function() {
            return this.blueprint.pages[this.blueprint.pages.length - 1];
        }
    },

    lastRow: {
        get: function() {
            return this.lastPage.rows[this.lastPage.rows.length - 1];
        }
    },

    lastColumn: {
        get: function() {
            return this.lastRow.columns[this.lastRow.columns.length - 1];
        }
    },

    $create: function() {
        this.blueprint = Blueprint.create();
        return this;
    },

    page: function() {
        this.blueprint.pages.push(Page.create());
        return this;
    },

    row: function() {
        this.lastPage.rows.push(Row.create());
        return this;
    },

    column: function() {
        this.lastRow.columns.push(Column.create());
        return this;
    },

    line: function(line) {
        this.lastColumn.lines.push(line);
        return this;
    }

});

module.exports = BlueprintBuilder;