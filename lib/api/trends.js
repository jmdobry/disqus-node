/**
 * [Up one level](../index.html)
 * ### Trends API
 * See also [Trends CLI](../cli/trends.html)
 */
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var parse = require('../util').parse;

module.exports = function Trends(config, logger) {
  /**
   * ### listThreads
   * Adds an entry to the whitelist.
   *
   * Signature:
   * ```js
   * Disqus#trends.listThreads(options[, cb])
   * ```
   *
   * Usage:
   * ```js
   * // Node-style
   * disqus.category.create({
	 *     forum: ['id1' 'id2'],
	 *     limit: 10,
	 *     related: ['forum', 'author', 'category']
	 * }, function (err, result) {...})
   *
   * // Promise-style
   * disqus.category.create({
	 *     forum: ['id1' 'id2'],
	 *     limit: 10,
	 *     related: ['forum', 'author', 'category']
	 * })
   * .then(function (result) {...})
   * .catch(function (err) {...});
   * ```
   */
  this.listThreads = function (options, cb) {
    return Promise.resolve({})
      .then(function (qs) {
        options = options || {};
        qs.api_key = options.api_key || config.api_key;

        if ('forum' in options) {
          // TODO: handle array
          qs.forum = options.forum;
        }
        if ('limit' in options) {
          qs.limit = options.limit;
        }
        if ('related' in options) {
          // TODO: handle array
          qs.related = options.related;
        }
        var opts = {
          method: 'GET',
          url: config.url + 'trends/listThreads.json',
          qs: qs
        };
        logger.debug(JSON.stringify(opts));
        return request(opts).then(parse);
      }).nodeify(cb);
  };
};
