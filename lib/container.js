var dependable = require('dependable');
var container = dependable.container();
var path = require('path');

container.register('commander', require('commander'));
container.register('Log', function () {
  return require('log');
});

container.load(path.join(__dirname, 'api'));
container.register('util', require('./util'));
container.register('Disqus', function () {
  return require('./');
});

container.register('container', container);

module.exports = container;
