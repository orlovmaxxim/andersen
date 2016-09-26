'use strict';

//Generates favicon using real favicon generator
module.exports = function() {
    $.gulp.task('favicon.create', function(cb) {
        return $.plugins.realFavicon.generateFavicon({
            masterPicture   : $.config.app.favicon.location,
            dest            : $.config.app.favicon.destination,
            iconsPath       : $.config.app.favicon.basedir,
            design          : $.config.app.favicon.config.design,
            settings        : $.config.app.favicon.config.settings,
            markupFile      : $.config.app.favicon.dataFile
        }, function() {
            cb();
        });
    });
};

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
/*gulp.task('check-for-favicon-update', function(done) {
    var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    realFavicon.checkForUpdates(currentVersion, function(err) {
        if (err) {
            throw err;
        }
    });
});*/