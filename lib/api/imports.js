/**
 * [Up one level](../index.html)
 * ### Imports API
 * See also [Imports CLI](../cli/imports.html)
 */
var Promise = require('bluebird');

module.exports = function Imports(config) {
	/**
	 * ### details
	 * Returns the details for an import.
	 *
	 * Signature:
	 * ```js
	 * Disqus#imports.details(options[, cb])
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
	 * Returns a list of all imports.
	 *
	 * Signature:
	 * ```js
	 * Disqus#imports.list(options[, cb])
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
};
