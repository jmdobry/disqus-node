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
	 * Not yet implemented.
	 */
	this.details = function () {
	};

	/**
	 * ### list
	 * Returns a list of categories within a forum.
	 *
	 * Not yet implemented.
	 */
	this.list = function () {
	};

	/**
	 * ### listPosts
	 * Returns a list of posts within a category.
	 *
	 * Not yet implemented.
	 */
	this.listPosts = function () {
	};

	/**
	 * ### listThreads
	 * Returns a list of threads within a category sorted by the date created.
	 *
	 * Not yet implemented.
	 */
	this.listThreads = function () {
	};
};
