var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var del = require('del');
var less = require('gulp-less');
var combiner = require('stream-combiner2');

var publicRoot = 'Internal/';

var observe = {
    scripts :  publicRoot + 'scripts/**/*.js', // js files to watch
    styles : publicRoot + 'styles/**/*.less' // less files to watch
};
var source = {
    scripts :  [
        publicRoot + 'scripts/namespace.js',
        publicRoot + 'scripts/config/*.js',
        publicRoot + 'scripts/Controllers/*.js',
        publicRoot + 'scripts/home.js'
    ], // the order to load your scripts
    styles : publicRoot + 'index.less' // your master LESS file
};
var compile = {
    scripts : publicRoot + 'index.js', // the path & file to compile the js
    styles : publicRoot + 'index.css' // the path & file to compile the css
};

gulp.task('default', function() {
    gulp.run('scripts');
    gulp.watch(observe.scripts, function() {
        del(compile.scripts, function() {
            gulp.run('scripts');
        });
    });
    gulp.run('styles');
    gulp.watch(observe.styles, function() {
        del(compile.styles, function() {
            gulp.run('styles');
        });
    });
});

gulp.task('scripts', function() {
    var combined = combiner.obj([
        gulp.src(source.scripts),
        concat(compile.scripts),
        gulp.dest('' + compile.scripts.split('/').slice(0, compile.scripts.split('/'.length) - 1))
    ]);
    combined.on('error', console.error.bind(console));
});

gulp.task('styles', function() {
    var combined = combiner.obj([
        gulp.src(source.styles),
        less(),
        gulp.dest('' + compile.styles.split('/')[0])
    ]);
    combined.on('error', console.error.bind(console));
});