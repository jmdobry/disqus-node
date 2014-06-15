module.exports = function (container, assert, sinon) {
  return function () {
    var blacklists;
    var Blacklists;
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

      Blacklists = container.get('Blacklists', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      blacklists = new Blacklists(config);
    });

    describe('add', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        blacklists.add(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'blacklists',
          name: 'add',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['domain', 'word', 'retroactive', 'notes', 'ip', 'user', 'email']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('list', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        blacklists.list(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'blacklists',
          name: 'list',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['since', 'related', 'cursor', 'limit', 'since_id', 'query', 'type', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('remove', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        blacklists.remove(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'blacklists',
          name: 'remove',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['domain', 'word', 'ip', 'user', 'email']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
