var requireHelper = require('../requireHelper');
var container = requireHelper('container');

container.register('assert', function () {
  return require('chai').assert;
});

container.register('sinon', function () {
  return require('sinon');
});

module.exports = container;
