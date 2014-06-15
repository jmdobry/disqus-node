module.exports = function (container, assert, sinon) {
  return function () {
    var exports;
    var Exports;
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

      Exports = container.get('Exports', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      exports = new Exports(config);
    });

    describe('exportForum', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        exports.exportForum(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'exports',
          name: 'exportForum',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['format']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
