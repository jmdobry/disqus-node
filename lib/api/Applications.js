/**
 * [Up one level](/lib/index.html)
 * ### Applications API
 * See the disqus-node [Applications CLI](/lib/cli/applications.html).
 *
 * See the [Applications API on Disqus.com](https://disqus.com/api/docs/applications/).
 */
var methods = {
  listUsage: {
    resource: 'applications',
    name: 'listUsage',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token'],
    availableOptions: ['application', 'days']
  }
};

module.exports = function (util) {
  return function Applications(config) {

    /**
     * ### listUsage
     * Returns the API usage per day for this application.
     *
     * Signature:
     * ```js
     * Disqus#applications.listUsage(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.applications.listUsage({
     *     // defaults shown
     *     application: null,
     *     days: 30
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.applications.listUsage({
     *     api_secret: 'asdfghkj', // can be set globally
     *     access_token: '12345678', // can be set globally
     *     // defaults shown
     *     application: null,
     *     days: 30
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listUsage = function (options, cb) {
      return util.executeAPIMethod(methods.listUsage, options, config, cb);
    };
  };
};
