'use strict';

//Relocate static files to build folder
module.exports = function() {
    $.gulp.task('files.static', function() {
        return $.gulp.src($.config.static.location)
            .pipe($.gulp.dest($.config.static.destination))
            ;
    });
};