module.exports = function (container, assert, sinon) {
  return function () {
    var users;
    var Users;
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

      Users = container.get('Users', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      users = new Users(config);
    });

    describe('listPosts', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        users.listPosts(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'users',
          name: 'listPosts',
          method: 'GET',
          requiredOptions: ['api_secret'],
          availableOptions: ['user', 'user:username']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
