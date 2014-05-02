# RDT Template Application (based on the [angular-app](https://github.com/angular-app/angular-app) GitHub project)

***

## Purpose

This template is designed to provide the basic structure for an RDT app project, including a space for server-side implementation. This template includes everything needed to get started using our **recommended** dev workflow, including: folder structure, using modules, and testing.

### Build

It is a complete project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:

* powered by [Grunt.js](http://gruntjs.com/)
* test written using [Jasmine](http://pivotal.github.com/jasmine/) syntax
* test are executed by [Karma Test Runner](http://karma-runner.github.io/0.8/index.html) (integrated with the Grunt.js build)
* [Twitter's bootstrap](http://getbootstrap.com/)

## Installation

### Platform & tools

You need to install Node.js, Bower, PhantomJS, and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.

* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4)

* Install Grunt-CLI and Karma as global npm modules:

    ```
    npm install -g grunt-cli karma
    ```

* [Install Bower](http://bower.io/):

    ```
    npm install -g bower
    ```

* [Install PhantomJS](http://phantomjs.org/download.html)


### Client App

The client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Grunt.js](gruntjs.com). Grunt relies upon some 3rd party libraries that we need to install as local dependencies using npm. The client application itself also requires some external dependencies, managed with Bower.

* Install local dependencies (from the project root folder):

    ```
    cd client
    npm install
    bower install
    cd ..
    ```

    (This will install the dependencies declared in the client/package.json and client/bower.json files)

### Build the client app

The app is made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  We use the Grunt build tool to do this.

* Build client application:

    ```
    cd client
    grunt build
    cd ..
    ```

## Development

### Folders structure
At the top level, the repository is split into a client folder and a server folder.  The client folder contains all the code and dependencies for the client-side AngularJS application.  The server folder contains nothing at this time. It is purposefully open-ended currently, as we decied on a default server-side framework for this template. Within the client folder you have the following structure:

* `dist` contains build results

* `src` contains application's sources

* `test` contains test sources, configuration and dependencies

* `package.json` Declares node dependencies

* `bower.json` Declares external dependencies for the application

* `gruntFile.js` Grunt configuration file

### Default Build
The default grunt task will build (checks the javascript (lint), runs the unit tests (test:unit) and builds distributable files) and run all unit tests: `grunt` (or `grunt.cmd` on Windows).  The tests are run by karma, and are currently configured to run using PhantomJS. Check out the client/test/config/unit.js to see the full test execution configuration. To perform the default build task (from the root project folder):


    cd client
    grunt


### Continuous Building
The watch grunt task will monitor the source files and unit test fixtures, and run the default build task every time a file changes: `grunt watch`.

### Build without tests
If for some reason you don't want to run the test but just generate the files - not recommended, as this template is built on the premise of using best practices, which INCLUDES testing(!!) - you can simply run the build task: `grunt build`.

### Continuous testing
You can have grunt (karma) continuously watch for file changes and automatically run all the tests on every change, without rebuilding the distribution files. This can make the test execution run faster when you are doing test driven development and don't need to actually run the application itself.


    cd client
    grunt test-watch



