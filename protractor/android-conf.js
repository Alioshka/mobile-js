exports.config = {
    seleniumAddress: require('../helpers/appiumUrl').hub,

    specs: ['spec/web-spec.js'],

    capabilities: require('../helpers/caps').androidRealDeviceChrome,

    baseUrl: 'https://angularjs.org'
};