exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['spec/web-spec.js'],

    capabilities:
        require('../helpers/caps').iosSimulatorSafari,

    baseUrl: 'https://angularjs.org'
};