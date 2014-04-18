/**
 * [Up one level](../index.html)
 * ### Posts API
 * See also [Posts CLI](../cli/posts.html)
 */
var Promise = require('bluebird');

module.exports = function Posts(config) {
	/**
	 * ### approve
	 * Approves the requested post(s).
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.approve(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.approve = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### create
	 * Creates a new post.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.create(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.create = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### details
	 * Returns information about a post.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.details(options[, cb])
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
	 * ### getContext
	 * Returns the hierarchal tree of a post (all parents).
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.getContext(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.getContext = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### list
	 * Returns a list of posts ordered by the date created.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.list(options[, cb])
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
	 * ### listPopular
	 * Returns a list of posts ordered by the number of likes recently.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.listPopular(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.listPopular = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### remove
	 * Deletes the requested post(s).
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.remove(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.remove = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### report
	 * Reports a post (flagging).
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.report(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.report = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### restore
	 * Undeletes the requested post(s).
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.restore(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.restore = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### spam
	 * Marks the requested post(s) as spam.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.spam(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.spam = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### update
	 * Updates information on a post.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.update(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.update = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### vote
	 * Register a vote on a post.
	 *
	 * Signature:
	 * ```js
	 * Disqus#posts.vote(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.vote = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};
};
