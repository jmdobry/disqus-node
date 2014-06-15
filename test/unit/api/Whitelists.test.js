module.exports = function (container, assert, sinon) {
  return function () {
    var whitelists;
    var Whitelists;
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

      Whitelists = container.get('Whitelists', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      whitelists = new Whitelists(config);
    });

    describe('add', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        whitelists.add(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'whitelists',
          name: 'add',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['notes', 'email', 'user']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('list', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        whitelists.list(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'whitelists',
          name: 'list',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['since', 'related', 'cursor', 'limit', 'since_id', 'query', 'type', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('remove', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        whitelists.remove(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'whitelists',
          name: 'remove',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: ['email', 'user']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
