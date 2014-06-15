/**
 * [Up one level](/lib/index.html)
 * ### Trends API
 * See the disqus-node [Trends CLI](/lib/cli/trends.html).
 *
 * See the [Trends API on Disqus.com](https://disqus.com/api/docs/trends/).
 */
var methods = {
  listThreads: {
    resource: 'trends',
    name: 'listThreads',
    method: 'GET',
    requiredOptions: ['api_secret'],
    availableOptions: ['limit', 'related', 'forum']
  }
};

module.exports = function (util) {
  return function Trends(config) {

    /**
     * ### listThreads
     * Returns a list of trending threads.
     *
     * Signature:
     * ```js
     * Disqus#trends.listThreads(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.trends.listThreads({
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     limit: 10,
     *     related: [],
     *     forum: null
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.trends.listThreads({
     *     // optional, defaults shown
     *     limit: 10,
     *     related: [],
     *     forum: null
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listThreads = function (options, cb) {
      return util.executeAPIMethod(methods.listThreads, options, config, cb);
    };
  };
};
