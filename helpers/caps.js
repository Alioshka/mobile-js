var path = require('path');

exports.iosSimulatorSafari = {
    browserName: 'safari',
    'appium-version': '1.4.13',
    platformName: 'iOS',
    platformVersion: '8.4',
    deviceName: 'iPad 2'
};

exports.androidRealDeviceChrome = {
    browserName: 'chrome',
    'appium-version': '1.4.13',
    platformName: 'Android',
    platformVersion: '4.4.2',
    deviceName: 'Android'
};

exports.androidRealDeviceNative = {
    browserName: '',
    'appium-version': '1.4.13',
    platformName: 'Android',
    platformVersion: '4.4.2',
    deviceName: 'Android',
    app:  path.resolve('apps/ContactManager.apk')
};

exports.iosSimulatorNative = {
    browserName: '',
    'appium-version': '1.4.13',
    platformName: 'iOS',
    platformVersion: '8.4',
    deviceName: 'iPad 2',
    app: path.resolve('apps/TestApp.app')
};