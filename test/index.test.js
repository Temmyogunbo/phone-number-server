const lab = (exports.lab = require('lab').script());
global.expect = require('chai').expect;

// prepare environment
global.it = lab.it;
global.describe = lab.describe;
global.before = lab.before;
global.beforeEach = lab.beforeEach;
