var container = require('./container');

describe('UNIT', function () {
  container.register('API.tests', require('./api/'));
  container.register('util.tests', require('./util/'));

  describe('API', container.get('API.tests'));
  describe('util', container.get('util.tests'));
});
