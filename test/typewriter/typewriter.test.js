var chai = require('chai'),
    Typewriter = require('typewriter/typewriter'),
    Blueprint = require('data/blueprint'),
    Column = require('data/column'),
    Row = require('data/row'),
    Page = require('data/page'),
    BlueprintBuilder = require('data/blueprintbuilder');

describe('Typewriter', function() {

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

});