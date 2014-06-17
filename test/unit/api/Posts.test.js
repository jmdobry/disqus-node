module.exports = function (container, assert, sinon) {
  return function () {
    var posts;
    var Posts;
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

      Posts = container.get('Posts', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      posts = new Posts(config);
    });

    describe('approve', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.approve(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'approve',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('create', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.create(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'create',
          method: 'POST',
          requiredOptions: ['api_secret', 'message'],
          availableOptions: ['parent', 'thread', 'author_email', 'author_name', 'state', 'author_url', 'date', 'ip_address']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('details', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.details(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'details',
          method: 'GET',
          requiredOptions: ['api_secret', 'post'],
          availableOptions: ['related']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('getContext', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.getContext(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'getContext',
          method: 'GET',
          requiredOptions: ['api_secret', 'post'],
          availableOptions: ['depth', 'related']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('list', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.list(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'list',
          method: 'GET',
          requiredOptions: ['api_secret'],
          availableOptions: ['category', 'thread', 'forum', 'since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listPopular', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.listPopular(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'listPopular',
          method: 'GET',
          requiredOptions: ['api_secret'],
          availableOptions: ['category', 'interval', 'thread', 'forum', 'related', 'limit', 'offset', 'query', 'include', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('remove', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.remove(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'remove',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('report', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.report(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'report',
          method: 'POST',
          requiredOptions: ['api_secret', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('restore', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.restore(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'restore',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('spam', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.spam(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'spam',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('update', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.update(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'update',
          method: 'POST',
          requiredOptions: ['api_secret', 'access_token', 'message', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('vote', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        posts.vote(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'posts',
          name: 'vote',
          method: 'POST',
          requiredOptions: ['api_secret', 'vote', 'post'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
