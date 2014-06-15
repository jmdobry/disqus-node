/**
 * [Up one level](/lib/index.html)
 * ### Blacklists API
 * See the disqus-node [Blacklists CLI](/lib/cli/blacklists.html).
 *
 * See the [Blacklists API on Disqus.com](https://disqus.com/api/docs/blacklists/).
 */
var methods = {
  add: {
    resource: 'blacklists',
    name: 'add',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['domain', 'word', 'retroactive', 'notes', 'ip', 'user', 'email']
  },
  list: {
    resource: 'blacklists',
    name: 'list',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['since', 'related', 'cursor', 'limit', 'since_id', 'query', 'type', 'order']
  },
  remove: {
    resource: 'blacklists',
    name: 'remove',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['domain', 'word', 'ip', 'user', 'email']
  }
};

module.exports = function (util) {
  return function Blacklists(config) {

    /**
     * ### add
     * Adds an entry to the blacklist.
     *
     * Signature:
     * ```js
     * Disqus#blacklists.add(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.blacklists.add({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     domain: [],
     *     word: [],
     *     retroactive: false,
     *     notes: '',
     *     ip: [],
     *     user: [],
     *     email: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.blacklists.add({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     domain: [],
     *     word: [],
     *     retroactive: false,
     *     notes: '',
     *     ip: [],
     *     user: [],
     *     email: []
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
     * Returns a list of all blacklist entries.
     *
     * Signature:
     * ```js
     * Disqus#blacklists.list(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.blacklists.list({
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
     * disqus.blacklists.list({
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
     * Removes an entry from the blacklist.
     *
     * Signature:
     * ```js
     * Disqus#blacklists.remove(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.blacklists.remove({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     domain: [],
     *     word: [],
     *     ip: [],
     *     user: [],
     *     email: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.blacklists.remove({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     domain: [],
     *     word: [],
     *     ip: [],
     *     user: [],
     *     email: []
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
