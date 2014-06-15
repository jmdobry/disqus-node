module.exports = function (container, assert, sinon) {
  return function () {
    var categories;
    var Categories;
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

      Categories = container.get('Categories', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      categories = new Categories(config);
    });

    describe('create', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        categories.create(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'categories',
          name: 'create',
          method: 'POST',
          requiredOptions: ['api_secret', 'forum', 'title'],
          availableOptions: ['default']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('details', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        categories.details(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'categories',
          name: 'details',
          method: 'GET',
          requiredOptions: ['api_secret', 'category'],
          availableOptions: []
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('list', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        categories.list(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'categories',
          name: 'list',
          method: 'GET',
          requiredOptions: ['api_secret', 'forum'],
          availableOptions: ['since_id', 'cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listPosts', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        categories.listPosts(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'categories',
          name: 'listPosts',
          method: 'GET',
          requiredOptions: ['api_secret', 'category'],
          availableOptions: ['since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

    describe('listThreads', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        categories.listThreads(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'categories',
          name: 'listThreads',
          method: 'GET',
          requiredOptions: ['api_secret', 'category'],
          availableOptions: ['since', 'related', 'cursor', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });
  };
};
