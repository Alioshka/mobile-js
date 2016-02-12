# Use Git

Open a command window and run:

```sh
$ git clone https://github.com/Alioshka/mobile-js.git
```

# Use NPM

Go the project root directory:
```sh
$ cd mobile-js
```

and run:
```sh
$ npm install
```
to install all required node.js modules for your project

# Install Protractor

```sh
$ npm install -g protractor@2.5.1
```
to install Protractor(Version 2.5.1) globally on your PC

!!! do not do this:

```sh
$ npm install -g protractor
```
because his command(without @2.5.1) will install the latest version of Protractor(Version 3x)
this version of protractor compatible only for node.js Version 4x
For our project and I strongly recommend to use Node Version v0.12.7

# Install Mocha

```sh
$ npm install -g -f mocha
```
to install Mocha globally on your PC

# Run Tests:

# Start Appium

Open a command window and run:

```sh
$ appium
```
or

```sh
$ appium -p 4444
```
to specify a port to use

# Run Web tests with Protractor:

```sh
$ protractor protractor/ios-conf.js
```
to run tests in Safari on iOS Simulator

```sh
$ protractor protractor/android-conf.js
```
to run tests in Chrome on Android real device
(don't forget to connect device to PC through USB, and device should be connected to Wifi)

# Run Native tests with Mocha:

```sh
$ mocha native/android.js
```
to run tests on Android real device
(don't forget to connect device to PC through USB, and device should be connected to Wifi)