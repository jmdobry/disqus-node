/**
 * [Up one level](/lib/index.html)
 * ### Category API
 * See the disqus-node [Category CLI](/lib/cli/category.html).
 *
 * See the [Category API on Disqus.com](https://disqus.com/api/docs/categories/).
 */
var util = require('../util');
var methods = {
	create: {
		resource: 'categories',
		name: 'create',
		method: 'POST',
		availableOptions: ['api_key', 'forum', 'title', 'default']
	},
	details: {
		resource: 'categories',
		name: 'details',
		method: 'GET',
		availableOptions: ['api_key', 'category']
	},
	list: {
		resource: 'categories',
		name: 'list',
		method: 'GET',
		availableOptions: ['api_key', 'forum', 'since_id', 'cursor', 'limit', 'order']
	},
	listPosts: {
		resource: 'categories',
		name: 'listPosts',
		method: 'GET',
		availableOptions: ['api_key', 'category', 'since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
	},
	listThreads: {
		resource: 'categories',
		name: 'listThreads',
		method: 'GET',
		availableOptions: ['api_key', 'category', 'since', 'related', 'cursor', 'limit', 'order']
	}
};

module.exports = function Category(config, logger) {
	/**
	 * ### create
	 * Creates a new category.
	 *
	 * Signature:
	 * ```js
	 * Disqus#category.create(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * // Node-style
	 * disqus.category.create({
	 *     forum: 'forumId',
	 *     title: 'my new category,
	 *     default: false
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.category.create({
	 *     forum: 'forumId',
	 *     title: 'my new category,
	 *     default: false
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.create = function (options, cb) {
		return util.executeAPIMethod(methods.create, options, config, logger, cb);
	};

	/**
	 * ### details
	 * Returns category details.
	 *
	 * Signature:
	 * ```js
	 * Disqus#category.details(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * // Node-style
	 * disqus.category.details({
	 *     category: 'categoryId'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.category.details({
	 *     category: 'categoryId'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.details = function (options, cb) {
		return util.executeAPIMethod(methods.details, options, config, logger, cb);
	};

	/**
	 * ### list
	 * Returns a list of categories within a forum.
	 *
	 * Signature:
	 * ```js
	 * Disqus#category.list(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * // Node-style
	 * disqus.category.list({
	 *     forum: 'forumId',
	 *     since_id: null,
	 *     cursor: null,
	 *     limit: 25,
	 *     order: 'asc'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.category.list({
	 *     forum: 'forumId',
	 *     since_id: null,
	 *     cursor: null,
	 *     limit: 25,
	 *     order: 'asc'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.list = function (options, cb) {
		return util.executeAPIMethod(methods.list, options, config, logger, cb);
	};

	/**
	 * ### listPosts
	 * Returns a list of posts within a category.
	 *
	 * Signature:
	 * ```js
	 * Disqus#category.listPosts(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * // Node-style
	 * disqus.category.listPosts({
	 *     category: 'categoryId',
	 *     since: null,
	 *     related: [],
	 *     cursor: null,
	 *     limit: 25,
	 *     query: null,
	 *     include: ['approved'],
	 *     order: 'asc'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.category.listPosts({
	 *     category: 'categoryId',
	 *     since: null,
	 *     related: [],
	 *     cursor: null,
	 *     limit: 25,
	 *     query: null,
	 *     include: ['approved'],
	 *     order: 'asc'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.listPosts = function (options, cb) {
		return util.executeAPIMethod(methods.listPosts, options, config, logger, cb);
	};

	/**
	 * ### listThreads
	 * Returns a list of threads within a category sorted by the date created.
	 *
	 * Signature:
	 * ```js
	 * Disqus#category.listThreads(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * // Node-style
	 * disqus.category.listThreads({
	 *     category: 'categoryId',
	 *     since: null,
	 *     related: [],
	 *     cursor: null,
	 *     limit: 25,
	 *     order: 'asc'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.category.listThreads({
	 *     category: 'categoryId',
	 *     since: null,
	 *     related: [],
	 *     cursor: null,
	 *     limit: 25,
	 *     order: 'asc'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.listThreads = function (options, cb) {
		return util.executeAPIMethod(methods.listThreads, options, config, logger, cb);
	};
};
