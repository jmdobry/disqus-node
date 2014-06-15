/**
 * [Up one level](/lib/index.html)
 * ### Exports API
 * See the disqus-node [Exports CLI](/lib/cli/exports.html).
 *
 * See the [Exports API on Disqus.com](https://disqus.com/api/docs/exports/).
 */
var methods = {
  exportForum: {
    resource: 'exports',
    name: 'exportForum',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['format']
  }
};

module.exports = function (util) {
  return function Exports(config) {

    /**
     * ### exportForum
     * Exports a forum.
     *
     * Signature:
     * ```js
     * Disqus#exports.exportForum(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.exports.exportForum({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     format: 'xml'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.exports.exportForum({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     format: 'xml'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.exportForum = function (options, cb) {
      return util.executeAPIMethod(methods.exportForum, options, config, cb);
    };
  };
};
