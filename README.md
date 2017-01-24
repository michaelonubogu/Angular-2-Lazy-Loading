# AngularJS 2 Lazy loading starter template

This repository holds a general an Angular 2 starter template - originally forked from [angular.io quickstart](https://github.com/angular/quickstart), the sourcecode for the [official Angular2 Quickstart docs](https://angular.io/docs/ts/latest/quickstart.html).
I modified it to accomodate for Lazy loading. It lazy loads Angular Modules using Angular 2's (Angular Router) route-based lazy loading approach (please refer to the app\config\module-loader.ts file. Also see Victor Savkin's post found [here](https://vsavkin.com/angular-router-declarative-lazy-loading-7071d1f203ee#.smd8cfps2))

It contains the following key features which help provide a starting point for any Angular 2 project

* e2e Unit tests written in Typescript using karma, jasmine. protractor is used for end-to-end tests
* basic service worker intergration for pre-caching & offline-first support (to be expanded further)
* simple module-based lazy-loading pattern based on angular router's implementation


## Prerequisites

* `Nodejs v4.x.x or greater`
* `npm v3.x.x or greater`. 
    
Download Nodejs from here https://docs.npmjs.com/getting-started/installing-node if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

or use [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Clone & Setup

* Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone https://github.com/michaelonubogu/Angular-2-Lazy-Loading.git  your-project-folder-name
cd your-project-folder-name
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json`:

```bash
npm install
```

## Run the project

Type `npm start` to compile, run and server the project from a lite webserver

```bash
npm start
```

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.


### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.


## Testing

Run e2e tests using one or all the following commands (more explained in later sections below):
* `npm test` - compiles, runs and watches the karma unit tests OR
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.


### Unit Tests
TypeScript unit-tests are by standard convention, usually placed in the `app` folder. Their filenames must end in `.spec`.

Look for the example `app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
(Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick).

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `app` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.ts` or `.e2e-spec.js` files as you wish (or you use one for the entire project);
protractor is configured in this app to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the Http-Server at `localhost:8080`
and launches protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart