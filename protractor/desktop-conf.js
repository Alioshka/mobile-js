exports.config = {
    specs: ['spec/web-spec.js'],

    capabilities: require('../helpers/caps').androidRealDeviceChrome,

    baseUrl: 'https://angularjs.org',

    framework: "jasmine2",

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(
            new AllureReporter({
                resultsDir: 'test-reports/allure-result'
            })
        );
    }
};