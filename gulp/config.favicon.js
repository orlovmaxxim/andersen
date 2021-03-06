'use strict';

module.exports = {
    design: {
        ios: {
            pictureAspect: 'backgroundAndMargin',
            backgroundColor: '#ffffff',
            margin: '35%',
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
            backgroundColor: '#ffffff',
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
            pictureAspect: 'backgroundAndMargin',
            margin: '25%',
            backgroundColor: '#ffffff',
            themeColor: '#ffffff',
            manifest: {
                name: 'cradle.boilerplate',
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
            themeColor: '#5b93d5'
        }
    },
    settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false
    }
};