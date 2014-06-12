/**
 * [Up one level](/lib/index.html)
 * ### Topics API
 * See the disqus-node [Topics CLI](/lib/cli/topics.html).
 *
 * See the [Topics API on Disqus.com](https://disqus.com/api/docs/topics/).
 */
var util = require('../util');
var methods = {
	follow: {
		resource: 'topics',
		name: 'follow',
		method: 'POST',
		auth: true,
		availableOptions: ['api_secret', 'api_key', 'access_token', 'target']
	},
	listFollowers: {
		resource: 'topics',
		name: 'listFollowers',
		method: 'GET',
		availableOptions: ['api_secret', 'api_key', 'access_token', 'topics', 'since_id', 'limit', 'order']
	},
	unfollow: {
		resource: 'topics',
		name: 'unfollow',
		method: 'POST',
		auth: true,
		availableOptions: ['api_secret', 'api_key', 'access_token', 'target']
	}
};

module.exports = function Topics(config, logger) {
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
	 *     target: 'targetId'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.topics.follow({
	 *     target: 'targetId'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.follow = function (options, cb) {
		return util.executeAPIMethod(methods.follow, options, config, logger, cb);
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
	 *     topic: 'topicId',
	 *     cursor: null,
	 *     since_id: null,
	 *     limit: 25,
	 *     order: 'asc'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.topics.listFollowers({
	 *     topic: 'topicId',
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
		return util.executeAPIMethod(methods.listFollowers, options, config, logger, cb);
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
	 *     target: 'targetId'
	 * }, function (err, result) {...})
	 *
	 * // Promise-style
	 * disqus.topics.unfollow({
	 *     target: 'targetId'
	 * })
	 * .then(function (result) {...})
	 * .catch(function (err) {...})
	 * .error(function (err) {...});
	 * ```
	 */
	this.unfollow = function (options, cb) {
		return util.executeAPIMethod(methods.unfollow, options, config, logger, cb);
	};
};
