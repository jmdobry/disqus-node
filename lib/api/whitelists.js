/**
 * [Up one level](../index.html)
 * ### Whitelists API
 * See also [Whitelists CLI](../cli/whitelists.html)
 */
var Promise = require('bluebird');

module.exports = function Whitelists(config) {
	/**
	 * ### add
	 * Adds an entry to the whitelist.
	 *
	 * Signature:
	 * ```js
	 * Disqus#whitelists.add(options[, cb])
	 * ```
	 *
	 * Usage:
	 * ```js
	 * Method not yet implemented.
	 * ```
	 */
	this.add = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;

				throw new Error('Not yet implemented!');
			}).nodeify(cb);
	};

	/**
	 * ### list
	 * Returns a list of all whitelist entries.
	 *
	 * Signature:
	 * ```js
	 * Disqus#whitelists.list(options[, cb])
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
	 * ### remove
	 * Removes an entry from the whitelist.
	 *
	 * Signature:
	 * ```js
	 * Disqus#whitelists.remove(options[, cb])
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
};
