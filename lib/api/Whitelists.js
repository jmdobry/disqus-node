/**
 * [Up one level](/lib/index.html)
 * ### Whitelists API
 * See the disqus-node [Whitelists CLI](/lib/cli/whitelists.html).
 *
 * See the [Whitelists API on Disqus.com](https://disqus.com/api/docs/whitelists/).
 */
var methods = {
  add: {
    resource: 'whitelists',
    name: 'add',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['notes', 'email', 'user']
  },
  list: {
    resource: 'whitelists',
    name: 'list',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['since', 'related', 'cursor', 'limit', 'since_id', 'query', 'type', 'order']
  },
  remove: {
    resource: 'whitelists',
    name: 'remove',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['email', 'user']
  }
};

module.exports = function (util) {
  return function Whitelists(config) {

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
     * // Node-style
     * disqus.whitelists.add({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     notes: '',
     *     email: [],
     *     user: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.whitelists.add({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     notes: '',
     *     email: [],
     *     user: []
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.add = function (options, cb) {
      return util.executeAPIMethod(methods.add, options, config, cb);
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
     * // Node-style
     * disqus.whitelists.list({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     since_id: null,
     *     query: null,
     *     type: null,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.whitelists.list({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     since_id: null,
     *     query: null,
     *     type: null,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.list = function (options, cb) {
      return util.executeAPIMethod(methods.list, options, config, cb);
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
     * // Node-style
     * disqus.whitelists.remove({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     email: [],
     *     user: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.whitelists.remove({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     email: [],
     *     user: []
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.remove = function (options, cb) {
      return util.executeAPIMethod(methods.remove, options, config, cb);
    };
  };
};
