/**
 * [Up one level](/lib/index.html)
 * ### Posts API
 * See the disqus-node [Posts CLI](/lib/cli/posts.html).
 *
 * See the [Posts API on Disqus.com](https://disqus.com/api/docs/posts/).
 */
var methods = {
  approve: {
    resource: 'posts',
    name: 'approve',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'post'],
    availableOptions: []
  },
  create: {
    resource: 'posts',
    name: 'create',
    method: 'POST',
    requiredOptions: ['api_secret', 'message'],
    availableOptions: ['parent', 'thread', 'author_email', 'author_name', 'state', 'author_url', 'date', 'ip_address']
  },
  details: {
    resource: 'posts',
    name: 'details',
    method: 'GET',
    requiredOptions: ['api_secret', 'post'],
    availableOptions: ['related']
  },
  getContext: {
    resource: 'posts',
    name: 'getContext',
    method: 'GET',
    requiredOptions: ['api_secret', 'post'],
    availableOptions: ['depth', 'related']
  },
  list: {
    resource: 'posts',
    name: 'list',
    method: 'GET',
    requiredOptions: ['api_secret'],
    availableOptions: ['category', 'thread', 'forum', 'since', 'related', 'cursor', 'limit', 'query', 'include', 'order']
  },
  listPopular: {
    resource: 'posts',
    name: 'listPopular',
    method: 'GET',
    requiredOptions: ['api_secret'],
    availableOptions: ['category', 'interval', 'thread', 'forum', 'related', 'limit', 'offset', 'query', 'include', 'order']
  },
  remove: {
    resource: 'posts',
    name: 'remove',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'post'],
    availableOptions: []
  },
  report: {
    resource: 'posts',
    name: 'report',
    method: 'POST',
    requiredOptions: ['api_secret', 'post'],
    availableOptions: []
  },
  restore: {
    resource: 'posts',
    name: 'restore',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'post'],
    availableOptions: []
  },
  spam: {
    resource: 'posts',
    name: 'spam',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'post'],
    availableOptions: []
  },
  update: {
    resource: 'posts',
    name: 'update',
    method: 'POST',
    requiredOptions: ['api_secret', 'access_token', 'message', 'post'],
    availableOptions: []
  },
  vote: {
    resource: 'posts',
    name: 'vote',
    method: 'POST',
    requiredOptions: ['api_secret', 'vote', 'post'],
    availableOptions: []
  }
};

module.exports = function (util) {
  return function Posts(config) {

    /**
     * ### approve
     * Approves the requested post(s).
     *
     * Signature:
     * ```js
     * Disqus#posts.approve(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.approve({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.approve({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.approve = function (options, cb) {
      return util.executeAPIMethod(methods.approve, options, config, cb);
    };

    /**
     * ### create
     * Creates a new post.
     *
     * Signature:
     * ```js
     * Disqus#posts.create(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.create({
     *     message: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.create({
     *     message: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
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
     * Returns information about a post.
     *
     * Signature:
     * ```js
     * Disqus#posts.details(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.details({
     *     post: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.details({
     *     post: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
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
     * ### getContext
     * Returns the hierarchal tree of a post (all parents).
     *
     * Signature:
     * ```js
     * Disqus#posts.getContext(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.getContext({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     depth: 10,
     *     related: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.getContext({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     depth: 10,
     *     related: []
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.getContext = function (options, cb) {
      return util.executeAPIMethod(methods.getContext, options, config, cb);
    };

    /**
     * ### list
     * Returns a list of posts ordered by the date created.
     *
     * Signature:
     * ```js
     * Disqus#posts.list(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.list({
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     category: null,
     *     thread: null,
     *     forum: null,
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
     * disqus.posts.list({
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     category: null,
     *     thread: null,
     *     forum: null,
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
    this.list = function (options, cb) {
      return util.executeAPIMethod(methods.list, options, config, cb);
    };

    /**
     * ### listPopular
     * Returns a list of posts ordered by the number of likes recently.
     *
     * Signature:
     * ```js
     * Disqus#posts.listPopular(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.listPopular({
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     category: null,
     *     interval: '7d',
     *     thread: null,
     *     forum: null,
     *     related: [],
     *     limit: 25,
     *     offset: 0,
     *     query: null,
     *     include: ['approved'],
     *     order: 'desc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.listPopular({
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     category: null,
     *     interval: '7d',
     *     thread: null,
     *     forum: null,
     *     related: [],
     *     limit: 25,
     *     offset: 0,
     *     query: null,
     *     include: ['approved'],
     *     order: 'desc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listPopular = function (options, cb) {
      return util.executeAPIMethod(methods.listPopular, options, config, cb);
    };

    /**
     * ### remove
     * Deletes the requested post(s).
     *
     * Signature:
     * ```js
     * Disqus#posts.remove(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.remove({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.remove({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.remove = function (options, cb) {
      return util.executeAPIMethod(methods.remove, options, config, cb);
    };

    /**
     * ### report
     * Reports a post (flagging).
     *
     * Signature:
     * ```js
     * Disqus#posts.report(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.report({
     *     post: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.report({
     *     post: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.report = function (options, cb) {
      return util.executeAPIMethod(methods.report, options, config, cb);
    };

    /**
     * ### restore
     * Undeletes the requested post(s).
     *
     * Signature:
     * ```js
     * Disqus#posts.restore(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.restore({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.restore({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.restore = function (options, cb) {
      return util.executeAPIMethod(methods.restore, options, config, cb);
    };

    /**
     * ### spam
     * Marks the requested post(s) as spam.
     *
     * Signature:
     * ```js
     * Disqus#posts.spam(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.spam({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.spam({
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.spam = function (options, cb) {
      return util.executeAPIMethod(methods.spam, options, config, cb);
    };

    /**
     * ### update
     * Updates information on a post.
     *
     * Signature:
     * ```js
     * Disqus#posts.update(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.update({
     *     message: '', // required
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.update({
     *     message: '', // required
     *     post: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     access_token: '12345678' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.update = function (options, cb) {
      return util.executeAPIMethod(methods.update, options, config, cb);
    };

    /**
     * ### vote
     * Register a vote on a post.
     *
     * Signature:
     * ```js
     * Disqus#posts.vote(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.posts.vote({
     *     vote: '', // required
     *     post: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.posts.vote({
     *     vote: '', // required
     *     post: '', // required
     *     api_secret: 'asdfghkj' // required, can be set globally
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.vote = function (options, cb) {
      return util.executeAPIMethod(methods.vote, options, config, cb);
    };
  };
};
