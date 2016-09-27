'use strict';

var plugins = require('gulp-load-plugins')({
    DEBUG : false
});

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),

    path: {
        task: [
            './gulp/tasks/clean.js',
            './gulp/tasks/sass.js',
            './gulp/tasks/fonts.js',
            './gulp/tasks/files.static.js',
            './gulp/tasks/pug.js',
            './gulp/tasks/js.process.js',
            './gulp/tasks/images.js',
            './gulp/tasks/svg.sprite.js',
            './gulp/tasks/serve.js',
            './gulp/tasks/watch.js',
            './gulp/tasks/favicon.create.js',
            './gulp/tasks/favicon.to.pug.js',
        ],
    },

    gulp        : require('gulp'),
    rimraf      : require('rimraf'),
    fs          : require('fs-utils'),
    console     : require('gulp-util'),
    plugins     : plugins,
    browserSync : require('browser-sync').create()
};



$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.series(
        'favicon.create',
        'favicon.to.pug'
    ),
    $.gulp.parallel(
        'fonts',
        'files.static',
        'sass',
        'pug',
        'js.process',
        'images',
        'svg.sprite'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));