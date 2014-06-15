module.exports = function (container, assert, sinon) {
  return function () {
    var imports;
    var Imports;
    var config;
    var options;
    var cb;
    var executeApiMethod;

    beforeEach(function () {
      config = {
        api_secret: '1234'
      };
      options = {
        stuff: 'stuff'
      };
      cb = function () {
      };

      executeApiMethod = sinon.spy();

      Imports = container.get('Imports', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      imports = new Imports(config);
    });

    describe('details', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        imports.details(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'imports',
          name: 'details',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token', 'forum', 'group'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('list', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        imports.list(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'imports',
          name: 'list',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['cursor']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
