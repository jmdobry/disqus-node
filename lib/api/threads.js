/**
 * [Up one level](../index.html)
 * ### Threads API
 * See also [Threads CLI](../cli/threads.html)
 */
var Promise = require('bluebird');

module.exports = function Threads(config) {
	/**
	 * ### close
	 * Closes a thread. See [disqus.com/api/docs/threads/close](http://disqus.com/api/docs/threads/close).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.close(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.close = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### create
	 * Creates a new thread. See [disqus.com/api/docs/threads/create](http://disqus.com/api/docs/threads/create).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.create(options[, cb])
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
	 * Returns thread details. See [disqus.com/api/docs/threads/details](http://disqus.com/api/docs/threads/details).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.details(options[, cb])
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
	 * Returns a list of threads sorted by the date created. See [disqus.com/api/docs/threads/list](http://disqus.com/api/docs/threads/list).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.list(options[, cb])
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
	 * ### listHot
	 * Returns a list of threads sorted by hotness (date and likes). See [disqus.com/api/docs/threads/listHot](http://disqus.com/api/docs/threads/listHot).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.listHot(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.listHot = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### listPopular
	 * Returns a list of threads sorted by number of posts made since "interval".
	 *
	 * If you are using both "category" and "forum" parameters, the forum of the category must match that as the
	 * parameter value for "forum".
	 *
	 * See [disqus.com/api/docs/threads/listPopular](http://disqus.com/api/docs/threads/listPopular).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.listPopular(options[, cb])
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
	 * ### listPosts
	 * Returns a list of posts within a thread. See [disqus.com/api/docs/threads/listPosts](http://disqus.com/api/docs/threads/listPosts).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.listPosts(options[, cb])
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
	 * ### open
	 * Opens a thread. See [disqus.com/api/docs/threads/open](http://disqus.com/api/docs/threads/open).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.open(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.open = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### remove
	 * Removes a thread. See [disqus.com/api/docs/threads/remove](http://disqus.com/api/docs/threads/remove).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.remove(options[, cb])
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
	 * ### restore
	 * Opens a thread. See [disqus.com/api/docs/threads/restore](http://disqus.com/api/docs/threads/restore).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.restore(options[, cb])
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
	 * ### set
	 * Returns an unsorted set of threads given a list of ids. See [disqus.com/api/docs/threads/set](http://disqus.com/api/docs/threads/set).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.set(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.set = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### subscribe
	 * Subscribe to a thread. See [disqus.com/api/docs/threads/subscribe](http://disqus.com/api/docs/threads/subscribe).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.subscribe(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.subscribe = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### unsubscribe
	 * Un-subscribe from a thread. See [disqus.com/api/docs/threads/unsubscribe](http://disqus.com/api/docs/threads/unsubscribe).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.unsubscribe(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.unsubscribe = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### update
	 * Updates information on a thread. See [disqus.com/api/docs/threads/update](http://disqus.com/api/docs/threads/update).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.update(options[, cb])
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
	 * Register a vote on a thread. See [disqus.com/api/docs/threads/vote](http://disqus.com/api/docs/threads/vote).
	 *
	 * Signature:
	 * ```js
	 * Disqus#threads.vote(options[, cb])
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
