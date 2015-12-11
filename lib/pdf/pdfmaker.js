var Protoplast = require('protoplast'),
    PDFDocument = require('pdfkit'),
    Fonts = require('../../ext/fonts');

var create_simplestream = function (filepath) {
    var simplestream = {
        chunks: [],
        filepath: filepath
    };
    simplestream.on = function (event, callback) {
        this.callback = callback;
    };
    simplestream.once = function () {};
    simplestream.emit = function () {};
    simplestream.write = function (chunk) {
        this.chunks.push(chunk);
    };
    simplestream.end = function () {
        if (simplestream.filepath) {
            var fsmodule = 'fs';
            var fs = require(fsmodule); // bypass requirejs minification/optimization
            var stream = fs.createWriteStream(simplestream.filepath, {
                encoding: "binary"
            });
            stream.on('finish', this.callback);
            simplestream.chunks.forEach(function (buffer) {
                stream.write(new Buffer(buffer.toString('base64'), 'base64'));
            });
            stream.end();
        } else {
            simplestream.blob = new Blob(simplestream.chunks, {
                type: "application/pdf"
            });
            simplestream.url = URL.createObjectURL(this.blob);
            this.callback(simplestream);
        }
    };
    return simplestream;
};

/**
 * @exports PdfMaker
 */
var PdfMaker = Protoplast.extend({

    initDoc: function() {
        var options = {
            compress: false,
            size: 'A4',
            margins: {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }
        };
        var doc = new PDFDocument(options);
        var myFont = Buffer(Fonts.prime.normal, "base64");
        doc.font(myFont);
        doc.fontSize(12);
        return doc;
    },

    generateContent: function(commands) {
        commands.forEach(function(command) {
            if (command.type === 'newpage') {
                if (!this.doc) {
                    this.doc = this.initDoc();
                }
                else {
                    this.doc.addPage();
                }
            }
            else if (command.type === 'newline') {
                this.x = 0;
                this.y = this.y + 15;
            }
            else if (command.type === 'text') {
                this.doc.text(command.text, this.x, this.y);
            }
            else if (command.type === 'goto') {
                this.x = command.x;
                this.y = command.y;
            }
        }, this)
    },

    finishDoc: function(callback, filepath) {
        var stream = this.doc.pipe(create_simplestream(filepath));
        this.doc.end();
        stream.on('finish', callback);
    },

    generate: function(commands, callback, filepath) {
        this.doc = null;
        this.generateContent(commands);
        this.finishDoc(callback, filepath)
    }

});

module.exports = PdfMaker;