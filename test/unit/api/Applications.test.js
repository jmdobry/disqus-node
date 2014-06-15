module.exports = function (container, assert, sinon) {
  return function () {
    var applications;
    var Applications;
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

      Applications = container.get('Applications', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      applications = new Applications(config);
    });

    describe('listUsage', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        applications.listUsage(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'applications',
          name: 'listUsage',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token'],
          availableOptions: ['application', 'days']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
