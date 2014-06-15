/**
 * [Up one level](/lib/index.html)
 * ### Topics API
 * See the disqus-node [Topics CLI](/lib/cli/topics.html).
 *
 * See the [Topics API on Disqus.com](https://disqus.com/api/docs/topics/).
 */
var methods = {
  follow: {
    resource: 'topics',
    name: 'follow',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'target'],
    availableOptions: []
  },
  listFollowers: {
    resource: 'topics',
    name: 'listFollowers',
    method: 'GET',
    requiredOptions: ['api_secret', 'topic'],
    availableOptions: ['cursor', 'since_id', 'limit', 'order']
  },
  unfollow: {
    resource: 'topics',
    name: 'unfollow',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'target'],
    availableOptions: []
  }
};

module.exports = function (util) {
  return function Topics(config) {

    /**
     * ### follow
     * Follow a topic.
     *
     * Signature:
     * ```js
     * Disqus#topics.follow(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.topics.follow({
     *     target: '',
     *     api_secret: 'asdfghkj', // can be set globally
     *     access_token: '12345678' // can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.topics.follow({
     *     target: ''
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.follow = function (options, cb) {
      return util.executeAPIMethod(methods.follow, options, config, cb);
    };

    /**
     * ### listFollowers
     * Returns a list of users following a topic.
     *
     * Signature:
     * ```js
     * Disqus#topics.listFollowers(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.topics.listFollowers({
     *     topic: '',
     *     // defaults shown
     *     cursor: null,
     *     since_id: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.topics.listFollowers({
     *     topic: '',
     *     api_secret: 'asdfghkj', // can be set globally
     *     // defaults shown
     *     cursor: null,
     *     since_id: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listFollowers = function (options, cb) {
      return util.executeAPIMethod(methods.listFollowers, options, config, cb);
    };

    /**
     * ### unfollow
     * Unfollow a topic.
     *
     * Signature:
     * ```js
     * Disqus#topics.unfollow(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.topics.unfollow({
     *     target: '',
     *     api_secret: 'asdfghkj', // can be set globally
     *     access_token: '12345678' // can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.topics.unfollow({
     *     target: ''
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.unfollow = function (options, cb) {
      return util.executeAPIMethod(methods.unfollow, options, config, cb);
    };
  };
};
