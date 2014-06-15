module.exports = function (container, assert, sinon) {
  return function () {
    var trends;
    var Trends;
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

      Trends = container.get('Trends', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      trends = new Trends(config);
    });

    describe('listThreads', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        trends.listThreads(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'trends',
          name: 'listThreads',
          method: 'GET',
          requiredOptions: ['api_secret'],
          availableOptions: ['limit', 'related', 'forum']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
