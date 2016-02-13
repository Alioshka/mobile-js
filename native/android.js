require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
var wd = require("wd");
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

describe('Contact manager', function () {

    this.timeout(300000);
    var driver;

    before(function () {
        var appiumUrl = require('../helpers/appiumUrl').hub;
        driver = wd.promiseChainRemote(appiumUrl);
        var desired = require("../helpers/caps").androidRealDeviceNative;
        return driver
            .init(desired)
            .setImplicitWaitTimeout(3000);
    });

    after(function () {
        return driver
            .quit();
    });

    describe('When I open application', function () {

        it('Then I should be able to click Add contact', function (done) {
            return driver
                .elementById('Add Contact')
                .click()
                .nodeify(done);
        });

        it('Write Contact Name', function (done) {
            return driver
                .elementById('com.example.android.contactmanager:id/contactNameEditText')
                .sendKeys('Appium User')
                .nodeify(done);
        });

        it('Write Contact Phone', function (done) {
            return driver
                .elementById('com.example.android.contactmanager:id/contactPhoneEditText')
                .sendKeys('4444')
                .nodeify(done);
        });

        it('Write Contact Email', function (done) {
            return driver
                .elementById('com.example.android.contactmanager:id/contactEmailEditText')
                .sendKeys('appium@user.com')
                .nodeify(done);
        });

        it('Save this contact', function (done) {
            return driver
                .elementById('com.example.android.contactmanager:id/contactSaveButton')
                .click()
                .nodeify(done);
        });

        it('And Then find this saved contact in contacts list', function (done) {
            return driver
                .elementById('com.example.android.contactmanager:id/contactEntryText').text()
                .then(function(text) {
                    text.should.equal('Appium User')
                })
                .nodeify(done);
        });

    });

});