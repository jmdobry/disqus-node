/**
 * [Up one level](../index.html)
 * ### Topics API
 * See also [Topics CLI](../cli/topics.html)
 */
var Promise = require('bluebird');

module.exports = function Topics(config) {
	/**
	 * ### follow
	 * Follow a topic.
	 *
	 * Signature:
	 * ```js
	 * Disqus#topics.follow(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.follow = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### listFollowers
	 * Returns a list of users following a topic.
	 *
	 * Signature:
	 * ```js
	 * Disqus#topics.listFollowers(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.listFollowers = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### unfollow
	 * Unfollow a topic.
	 *
	 * Signature:
	 * ```js
	 * Disqus#topics.unfollow(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.unfollow = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

};
