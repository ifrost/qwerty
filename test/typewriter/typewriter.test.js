var chai = require('chai'),
    Typewriter = require('typewriter/typewriter'),
    Blueprint = require('data/blueprint'),
    Column = require('data/column'),
    Row = require('data/row'),
    Page = require('data/page'),
    BlueprintBuilder = require('data/blueprintbuilder');

describe.only('Typewriter', function() {

    var typewriter, builder;

    beforeEach(function() {
        typewriter = Typewriter.create();
        builder = BlueprintBuilder.create();
    });

    function assertCommands(commands, assertions) {
        var msg;
        chai.assert.lengthOf(commands, assertions.length);
        commands.forEach(function(command, i){
            for (var property in assertions[i]) {
                if (command[property] !== assertions[i][property]) {
                    if (property === 'type') {
                        msg = '(assertion #' + i + ') expected command type ' + assertions[i].type + ', got: ' + command.type;
                    }
                    else {
                        msg = '(assertion #' + i + ') expected ' + command.type + ' to have ' + property + '=' + assertions[i][property] + ', got: ' + property + '=' + command[property];
                    }
                    chai.assert.ok(false, msg);
                }
            }
        });
    }

    it('Creates commands to print a single line', function() {

        var blueprint = builder.page().row().column().line('line').blueprint;

        var commands = typewriter.process(blueprint);

        assertCommands(commands, [
            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'text', text: 'line'}
        ]);
    });

    it('Creates correct number of pages', function() {

        var blueprint = builder
            .page().row().column()
            .page().row().column()
            .page().row().column().blueprint;

        var commands = typewriter.process(blueprint);

        assertCommands(commands, [
            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0}
        ]);

    });

    it('Creates commands with multiple lines', function() {

        var blueprint = builder
            .page().row().column().line('line1').line('line2').line('line3')
            .page().row().column().line('line4')
            .page().row().column().line('line5').blueprint;

        var commands = typewriter.process(blueprint);

        assertCommands(commands, [
            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'text', text: 'line1'},
            {type: 'newline'},
            {type: 'text', text: 'line2'},
            {type: 'newline'},
            {type: 'text', text: 'line3'},

            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'text', text: 'line4'},

            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'text', text: 'line5'}
        ]);
    });

    it('Creates commands for multiple columns', function() {

        var blueprint = builder
            .page().row()
                .column().line('lineA1').line('lineA2')
                .column().line('lineB1').blueprint;

        var commands = typewriter.process(blueprint);

        assertCommands(commands, [
            {type: 'newpage'},
            {type: 'goto', x: 0, y: 0},
            {type: 'text', text: 'lineA1'},
            {type: 'newline'},
            {type: 'text', text: 'lineA2'},
            {type: 'goto', x: 10, y: 0},
            {type: 'text', text: 'lineB1'}
        ]);
    });

});