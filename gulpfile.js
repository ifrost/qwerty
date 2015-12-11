var gulp  = require('gulp');
var shell = require('gulp-shell');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('doc', shell.task('jsdoc -c jsdoc.conf.json'));
gulp.task('test', shell.task('mocha --recursive'));
gulp.task('dtest', shell.task('mocha --recursive --debug'));
gulp.task('coverage', shell.task('istanbul cover node_modules/mocha/bin/_mocha -- --reporter spec --recursive'));

gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('index.js')
        .pipe(browserify({
            insertGlobals : false,
            debug : false
        }))
        .pipe(rename('qwerty.js'))
        .pipe(gulp.dest('./dist'))
});