'use strict';

module.exports = {
    design : {
        ios: {
            pictureAspect: 'noChange',
            assets: {
                ios6AndPriorIcons: false,
                ios7AndLaterIcons: false,
                precomposedIcons: false,
                declareOnlyDefaultIcon: true
            }
        },
        desktopBrowser: {},
        windows: {
            pictureAspect: 'noChange',
            backgroundColor: '#da532c',
            onConflict: 'override',
            assets: {
                windows80Ie10Tile: false,
                windows10Ie11EdgeTiles: {
                    small: false,
                    medium: true,
                    big: false,
                    rectangle: false
                }
            }
        },
        androidChrome: {
            pictureAspect: 'noChange',
            themeColor: '#ffffff',
            manifest: {
                name: 'test',
                display: 'standalone',
                orientation: 'notSet',
                onConflict: 'override',
                declared: true
            },
            assets: {
                legacyIcon: false,
                lowResolutionIcons: false
            }
        },
        safariPinnedTab: {
            pictureAspect: 'silhouette',
            themeColor: '#5bbad5'
        }
    },
    settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false
    }
};