/**
 * [Up one level](/lib/index.html)
 * ### Forums API
 * See the disqus-node [Forums CLI](/lib/cli/forums.html).
 *
 * See the [Forums API on Disqus.com](https://disqus.com/api/docs/forums/).
 */
var methods = {
  addModerator: {
    resource: 'forums',
    name: 'addModerator',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'user', 'forum'],
    availableOptions: []
  },
  create: {
    resource: 'forums',
    name: 'create',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'website', 'name', 'short_name'],
    availableOptions: []
  },
  details: {
    resource: 'forums',
    name: 'details',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['related']
  },
  follow: {
    resource: 'forums',
    name: 'follow',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'target'],
    availableOptions: []
  },
  installed: {
    resource: 'forums',
    name: 'installed',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: []
  },
  listCategories: {
    resource: 'forums',
    name: 'listCategories',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['since_id', 'cursor', 'limit', 'order']
  },
  listFollowers: {
    resource: 'forums',
    name: 'listFollowers',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['since_id', 'cursor', 'limit', 'order']
  },
  listModerators: {
    resource: 'forums',
    name: 'listModerators',
    method: 'GET',
    requiredOptions: ['api_secret', 'access_token', 'forum'],
    availableOptions: []
  },
  listMostActiveUsers: {
    resource: 'forums',
    name: 'listMostActiveUsers',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['cursor', 'limit', 'order']
  },
  listMostLikedUsers: {
    resource: 'forums',
    name: 'listMostLikedUsers',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['cursor', 'limit', 'order']
  },
  listPosts: {
    resource: 'forums',
    name: 'listPosts',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
  },
  listThreads: {
    resource: 'forums',
    name: 'listThreads',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['thread', 'since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
  },
  listUsers: {
    resource: 'forums',
    name: 'listUsers',
    method: 'GET',
    requiredOptions: ['api_secret', 'forum'],
    availableOptions: ['since_d', 'cursor', 'limit', 'order']
  },
  removeModerator: {
    resource: 'forums',
    name: 'removeModerator',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'moderator'],
    availableOptions: []
  },
  unfollow: {
    resource: 'forums',
    name: 'unfollow',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'target'],
    availableOptions: []
  }
};

module.exports = function (util) {
  return function Forums(config) {

    /**
     * ### addModerator
     * Adds a moderator to a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.addModerator(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.addModerator({
     *     user: '', // required
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.addModerator({
     *     user: '', // required
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.addModerator = function (options, cb) {
      return util.executeAPIMethod(methods.addModerator, options, config, cb);
    };

    /**
     * ### create
     * Creates a new forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.create(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.create({
     *     website: '', // required
     *     name: '', // required
     *     short_name: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.create({
     *     website: '', // required
     *     name: '', // required
     *     short_name: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.create = function (options, cb) {
      return util.executeAPIMethod(methods.create, options, config, cb);
    };

    /**
     * ### details
     * Returns forum details.
     *
     * Signature:
     * ```js
     * Disqus#forums.details(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.details({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     related: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.details({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678', // required, can be set globally
     *     // optional, defaults shown
     *     related: []
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
     * ### follow
     * Follow a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.follow(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.follow({
     *     target: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.follow({
     *     target: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
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
     * ### installed
     * Returns true if forum has one or more views.
     *
     * Signature:
     * ```js
     * Disqus#forums.installed(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.installed({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.installed({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.installed = function (options, cb) {
      return util.executeAPIMethod(methods.installed, options, config, cb);
    };

    /**
     * ### listCategories
     * Returns a list of categories within a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.listCategories(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listCategories({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listCategories({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listCategories = function (options, cb) {
      return util.executeAPIMethod(methods.listCategories, options, config, cb);
    };

    /**
     * ### listFollowers
     * Returns a list of users following a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.listFollowers(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listFollowers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listFollowers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
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
     * ### listModerators
     * Returns a list of all moderators on a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.listModerators(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listModerators({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listModerators({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listModerators = function (options, cb) {
      return util.executeAPIMethod(methods.listModerators, options, config, cb);
    };

    /**
     * ### listMostActiveUsers
     * Returns a list of users active within a forum ordered by most comments made.
     *
     * Signature:
     * ```js
     * Disqus#forums.listMostActiveUsers(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listMostActiveUsers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listMostActiveUsers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listMostActiveUsers = function (options, cb) {
      return util.executeAPIMethod(methods.listMostActiveUsers, options, config, cb);
    };

    /**
     * ### listMostLikedUsers
     * Returns a list of users active within a forum ordered by most likes received.
     *
     * Signature:
     * ```js
     * Disqus#forums.listMostLikedUsers(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listMostLikedUsers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listMostLikedUsers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listMostLikedUsers = function (options, cb) {
      return util.executeAPIMethod(methods.listMostLikedUsers, options, config, cb);
    };

    /**
     * ### listPosts
     * Returns a list of posts within a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.listPosts(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listPosts({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     query: null,
     *     include: ['approved'],
     *     order: 'desc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listPosts({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     query: null,
     *     include: ['approved'],
     *     order: 'desc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listPosts = function (options, cb) {
      return util.executeAPIMethod(methods.listPosts, options, config, cb);
    };

    /**
     * ### listThreads
     * Returns a list of threads within a forum sorted by the date created.
     *
     * Signature:
     * ```js
     * Disqus#forums.listThreads(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listThreads({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     thread: null,
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     query: null,
     *     include: ['approved'],
     *     order: 'desc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listThreads({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     thread: null,
     *     since: null,
     *     related: [],
     *     cursor: null,
     *     limit: 25,
     *     query: null,
     *     include: ['approved'],
     *     order: 'desc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listThreads = function (options, cb) {
      return util.executeAPIMethod(methods.listThreads, options, config, cb);
    };

    /**
     * ### listUsers
     * Returns a list of users active within a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.listUsers(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.listUsers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.listUsers({
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     since_id: null,
     *     cursor: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listUsers = function (options, cb) {
      return util.executeAPIMethod(methods.listUsers, options, config, cb);
    };

    /**
     * ### removeModerator
     * Removes a moderator from a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.removeModerator(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.removeModerator({
     *     moderator: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.removeModerator({
     *     moderator: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.removeModerator = function (options, cb) {
      return util.executeAPIMethod(methods.removeModerator, options, config, cb);
    };

    /**
     * ### unfollow
     * Unfollow a forum.
     *
     * Signature:
     * ```js
     * Disqus#forums.unfollow(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.forums.unfollow({
     *     target: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.forums.unfollow({
     *     target: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
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
