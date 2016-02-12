require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
var wd = require("wd");
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

describe("ios simple calculator", function () {

    this.timeout(300000);
    var driver;

    before(function () {
        driver = wd.promiseChainRemote('localhost',4444);
        var desired = require("../helpers/caps").iosSimulatorNative;
        return driver
            .init(desired)
    });

    after(function () {
        return driver
            .quit();
    });

    describe('When I open application', function () {

        it('And put 6 in the first field', function (done) {
            return driver
                .elementByName('TextField1')
                .sendKeys('6')
                .nodeify(done);
        });

        it('And put 4 in the second field', function (done) {
            return driver
                .elementByName('TextField2')
                .sendKeys('4')
                .nodeify(done);
        });

        it('And click Compute Sum', function (done) {
            return driver
                .elementByName('ComputeSumButton')
                .click()
                .nodeify(done);
        });

        it('Then the sum should be 10', function (done) {
            return driver
                .elementByName('Answer').text()
                .then(function(text) {
                    text.should.equal('10')
                })
                .nodeify(done);
        });

    });

});