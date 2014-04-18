/**
 * [Up one level](../index.html)
 * ### Category API
 * See also [Category CLI](../cli/category.html)
 */
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var parse = require('../util/parse');

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
	 * .catch(function (err) {...});
	 * ```
	 */
	this.create = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				if ('forum' in options) {
					qs.forum = options.forum;
				}
				if ('title' in options) {
					qs.title = options.title;
				}
				if ('default' in options) {
					qs.default = options.default;
				}
				var opts = {
					method: 'POST',
					url: config.url + 'categories/create.json',
					qs: qs
				};
				logger.debug(JSON.stringify(opts));
				return request(opts).then(parse);
			}).nodeify(cb);
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
	 * Method not yet implemented.
	 * ```
	 */
	this.details = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
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
	 * Method not yet implemented.
	 * ```
	 */
	this.list = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
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
	 * Method not yet implemented.
	 * ```
	 */
	this.listPosts = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
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
	 * Method not yet implemented.
	 * ```
	 */
	this.listThreads = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};
};
