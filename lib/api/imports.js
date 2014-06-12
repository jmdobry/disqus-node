/**
 * [Up one level](/lib/index.html)
 * ### Imports API
 * See the disqus-node [Imports CLI](/lib/cli/imports.html).
 *
 * See the [Imports API on Disqus.com](https://disqus.com/api/docs/imports/).
 */
var util = require('../util');
var methods = {
	details: {
		resource: 'imports',
		name: 'details',
		method: 'GET',
		availableOptions: ['api_key', 'group', 'forum']
	},
	list: {
		resource: 'imports',
		name: 'list',
		method: 'GET',
		availableOptions: ['api_key', 'forum', 'cursor']
	}
};

module.exports = function Imports(config, logger) {
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
	 * // Node-style
	 * disqus.imports.details({
	 *     forum: 'forumId',
	 *     group: 'groupId'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.imports.details({
	 *     forum: 'forumId',
	 *     group: 'groupId'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.details = function (options, cb) {
		return util.executeAPIMethod(methods.defails, options, config, logger, cb);
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
	 * // Node-style
	 * disqus.imports.list({
	 *     forum: 'forumId',
	 *     cursor: null
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.imports.list({
	 *     forum: 'forumId',
	 *     cursor: null
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.list = function (options, cb) {
		return util.executeAPIMethod(methods.list, options, config, logger, cb);
	};
};
