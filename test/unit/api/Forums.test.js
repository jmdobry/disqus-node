module.exports = function (container, assert, sinon) {
  return function () {
    var forums;
    var Forums;
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

      Forums = container.get('Forums', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      forums = new Forums(config);
    });

    describe('addModerator', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.addModerator(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'addModerator',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'user', 'forum'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('create', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.create(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'create',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'website', 'name', 'short_name'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('details', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.details(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'details',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['related']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('follow', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.follow(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'follow',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'target'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('installed', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.installed(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'installed',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listCategories', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listCategories(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listCategories',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['since_id', 'cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listFollowers', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listFollowers(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listFollowers',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['since_id', 'cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listModerators', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listModerators(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listModerators',
          method: 'GET',
          requiredOptions: ['api_secret', 'access_token', 'forum'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listMostActiveUsers', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listMostActiveUsers(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listMostActiveUsers',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listMostLikedUsers', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listMostLikedUsers(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listMostLikedUsers',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listPosts', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listPosts(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listPosts',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listThreads', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listThreads(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listThreads',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['thread', 'since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listUsers', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.listUsers(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'listUsers',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['since_d', 'cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('removeModerator', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.removeModerator(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'removeModerator',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'moderator'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('unfollow', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        forums.unfollow(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'forums',
          name: 'unfollow',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'target'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
