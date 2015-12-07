var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('doc', shell.task('jsdoc -c jsdoc.conf.json'));
gulp.task('test', shell.task('mocha --recursive'));
gulp.task('dtest', shell.task('mocha --recursive --debug'));
gulp.task('coverage', shell.task('istanbul cover node_modules/mocha/bin/_mocha -- --reporter spec --recursive'));