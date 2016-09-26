'use strict';

//Compile pug templates
module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src($.config.pug.compiled)
            .pipe($.plugins.plumber())
            .pipe($.plugins.pug($.config.pug.config))
            .pipe($.plugins.if('*.js', $.plugins.uglify()))
            .pipe($.plugins.if('*.css', $.plugins.cssnano()))
            .pipe($.plugins.useref())
            .pipe($.gulp.dest($.config.pug.destination))
        ;
    });
};