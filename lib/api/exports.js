/**
 * [Up one level](/lib/index.html)
 * ### Exports API
 * See the disqus-node [Exports CLI](/lib/cli/exports.html).
 *
 * See the [Exports API on Disqus.com](https://disqus.com/api/docs/exports/).
 */
var util = require('../util');
var methods = {
  exportForum: {
    resource: 'exports',
    name: 'exportForum',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: ['format']
  }
};

module.exports = function Exports(config, logger) {

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
	 *     forum: '',
   *     // defaults shown
	 *     format: 'xml'
	 * }, function (err, result) {...})
   *
   * // Promise-style
   * disqus.exports.exportForum({
	 *     forum: '',
	 *     api_secret: 'asdfghkj', // can be set globally
	 *     access_token: '12345678', // can be set globally
   *     // defaults shown
	 *     format: 'xml'
	 * })
   * .then(function (result) {...})
   * .catch(function (err) {...})
   * .error(function (err) {...});
   * ```
   */
  this.exportForum = function (options, cb) {
    return util.executeAPIMethod(methods.exportForum, options, config, logger, cb);
  };
};
