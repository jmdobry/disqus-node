/**
 * [Up one level](/lib/index.html)
 * ### Users API
 * See the disqus-node [USers CLI](/lib/cli/users.html).
 *
 * See the [Users API on Disqus.com](https://disqus.com/api/docs/users/).
 */
var methods = {
  listPosts: {
    resource: 'users',
    name: 'listPosts',
    method: 'GET',
    requiredOptions: ['api_secret'],
    availableOptions: [
        'since',
        'related',
        'cursor',
        'limit',
        'include',
        'user', // either user or user:username is really required
        'user:username'
    ]
  }
};

module.exports = function (util) {
  return function Users(config) {

    /**
     * ### listPosts
     * Get the user's posts.
     *
     * Signature:
     * ```js
     * Disqus#users.listPosts(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.users.listPosts({
     *     user: '', // required, either user ID (number) or username (string)
     *     api_secret: 'asdfghkj', // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.users.listPosts({
     *     user: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listPosts = function (options, cb) {
      if (typeof options.user === 'string') {
        options['user:username'] = options.user;
        delete options.user;
      }

      return util.executeAPIMethod(methods.listPosts, options, config, cb);
    };

  };
};
