module.exports = function (container, assert, sinon) {
  return function () {
    var topics;
    var Topics;
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

      Topics = container.get('Topics', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      topics = new Topics(config);
    });

    describe('follow', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        topics.follow(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'topics',
          name: 'follow',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'target'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listFollowers', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        topics.listFollowers(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'topics',
          name: 'listFollowers',
          method: 'GET',
          requiredOptions: ['api_secret', 'topic'],
          availableOptions: ['cursor', 'since_id', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('unfollow', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        topics.unfollow(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'topics',
          name: 'unfollow',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'target'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
