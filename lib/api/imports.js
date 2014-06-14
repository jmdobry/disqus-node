/**
 * [Up one level](/lib/index.html)
 * ### Imports API
 * See the disqus-node [Imports CLI](/lib/cli/imports.html).
 *
 * See the [Imports API on Disqus.com](https://disqus.com/api/docs/imports/).
 */
var methods = {
  details: {
    resource: 'imports',
    name: 'details',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token', 'forum', 'group'],
    availableOptions: []
  },
  list: {
    resource: 'imports',
    name: 'list',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['cursor']
  }
};

module.exports = function (util) {
  return function Imports(config) {

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
     *     forum: '',
     *     group: '',
     *     api_secret: 'asdfghkj', // can be set globally
     *     access_token: '12345678' // can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.imports.details({
     *     forum: '',
     *     group: ''
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.details = function (options, cb) {
      return util.executeAPIMethod(methods.details, options, config, cb);
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
     *     // defaults shown
     *     cursor: null
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.imports.list({
     *     forum: '',
     *     api_secret: 'asdfghkj', // can be set globally
     *     access_token: '12345678', // can be set globally
     *     // defaults shown
     *     cursor: null
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.list = function (options, cb) {
      return util.executeAPIMethod(methods.list, options, config, cb);
    };
  };
};
