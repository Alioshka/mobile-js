exports.config = {
    seleniumAddress: require('../helpers/appiumUrl').hub,

    specs: ['spec/web-spec.js'],

    capabilities: require('../helpers/caps').iosSimulatorSafari,

    baseUrl: 'https://angularjs.org'
};