module.exports = function (container) {
  return function () {
    container.register('API.Applications.test', require('./Applications.test'));
    container.register('API.Blacklists.test', require('./Blacklists.test'));
    container.register('API.Categories.test', require('./Categories.test'));
    container.register('API.Exports.test', require('./Exports.test'));
    container.register('API.Forums.test', require('./Forums.test'));
    container.register('API.Imports.test', require('./Imports.test'));
    container.register('API.Posts.test', require('./Posts.test'));
    container.register('API.Topics.test', require('./Topics.test'));
    container.register('API.Trends.test', require('./Trends.test'));
    container.register('API.Users.test', require('./Users.test'));
    container.register('API.Whitelists.test', require('./Whitelists.test'));

    describe('Applications', container.get('API.Applications.test'));
    describe('Blacklists', container.get('API.Blacklists.test'));
    describe('Categories', container.get('API.Categories.test'));
    describe('Exports', container.get('API.Exports.test'));
    describe('Forums', container.get('API.Forums.test'));
    describe('Imports', container.get('API.Imports.test'));
    describe('Posts', container.get('API.Posts.test'));
    describe('Topics', container.get('API.Topics.test'));
    describe('Trends', container.get('API.Trends.test'));
    describe('Users', container.get('API.Users.test'));
    describe('Whitelists', container.get('API.Whitelists.test'));
  };
};
