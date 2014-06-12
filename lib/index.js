/**
 * [Up one level](../)
 * ### disqus-node API
 */
var Log = require('log');
var Applications = require('./api/applications');
var Blacklists = require('./api/blacklists');
var Category = require('./api/category');
var Exports = require('./api/exports');
var Forums = require('./api/forums');
var Imports = require('./api/imports');
var Posts = require('./api/posts');
var Threads = require('./api/threads');
var Topics = require('./api/topics');
var Trends = require('./api/trends');
var Users = require('./api/users');
var Whitelists = require('./api/whitelists');

/**
 * ### Constructor Function
 *
 * Signature:
 * ```js
 * new Disqus(options)
 * ```
 *
 * Usage:
 * ```js
 *  var Disqus = require('disqus-node');
 *  var disqus = new Disqus({
 *    api_key: 'API_KEY',
 *    api_secret: 'API_SECRET',
 *    logLevel: 'info',
 *    https: true
 *  });
 * ```
 */
function Disqus(options) {
	options = options || {};

	/**
	 * ### Options
	 */
	/**
	 * ###### logLevel
	 * Must be a string. Defaults to `"info"`.
	 *
	 * Choices: `"debug"`, `"info"`, `"notice"`, `"warning"`, `"error"`, `"critical"`, `"alert"`, `"emergency"`.
	 */
	options.logLevel = options.logLevel || 'info';
	if (typeof options.logLevel !== 'string') {
		throw new Error('logLevel must be a string!');
	}

	/**
	 * ###### api_key
	 * Must be a string. Required.
	 */
	if (typeof options.api_key !== 'string') {
		throw new Error('api_key must be a string!');
	}

	/**
	 * ###### api_secret
	 * Must be a string. Required for actions that require authentication.
	 */
	if ('api_secret' in options && typeof options.api_secret !== 'string') {
		throw new Error('api_secret must be a string!');
	}

	this.config = {
		/**
		 * ###### https
		 * Must be a boolean. Defaults to `true`.
		 *
		 * Specifies whether to use https for requests.
		 */
		url: (options.https ? 'https' : 'http') + '://disqus.com/api/3.0/',
		logLevel: options.logLevel,
		api_key: options.api_key,
		api_secret: options.api_secret
	};

	this.logger = new Log(this.config.logLevel);

	/**
	 * ### Resources API
	 */
	/**
	 * ###### Applications
	 * [API](/lib/api/applications.html) | [CLI](/lib/cli/applications.html)
	 */
	this.applications = new Applications(this.config, this.logger);
	/**
	 * ###### Blacklists
	 * [API](/lib/api/blacklists.html) | [CLI](/lib/cli/blacklists.html)
	 */
	this.blacklists = new Blacklists(this.config, this.logger);
	/**
	 * ###### Category
	 * [API](/lib/api/category.html) | [CLI](/lib/cli/category.html) | [Disqus](https://disqus.com/api/docs/categories/)
	 */
	this.category = new Category(this.config, this.logger);
	/**
	 * ###### Exports
	 * [API](/lib/api/exports.html) | [CLI](/lib/cli/exports.html)
	 */
	this.exports = new Exports(this.config, this.logger);
	/**
	 * ###### Forums
	 * [API](/lib/api/forums.html) | [CLI](/lib/cli/forums.html)
	 */
	this.forums = new Forums(this.config, this.logger);
	/**
	 * ###### Imports
	 * [API](/lib/api/imports.html) | [CLI](/lib/cli/imports.html) | [Disqus](https://disqus.com/api/docs/imports/)
	 */
	this.imports = new Imports(this.config, this.logger);
	/**
	 * ###### Posts
	 * [API](/lib/api/posts.html) | [CLI](/lib/cli/posts.html)
	 */
	this.posts = new Posts(this.config, this.logger);
	/**
	 * ###### Threads
	 * [API](/lib/api/threads.html) | [CLI](/lib/cli/threads.html)
	 */
	this.threads = new Threads(this.config, this.logger);
	/**
	 * ###### Topics
	 * [API](/lib/api/topics.html) | [CLI](/lib/cli/topics.html)
	 */
	this.topics = new Topics(this.config, this.logger);
	/**
	 * ###### Trends
	 * [API](/lib/api/trends.html) | [CLI](/lib/cli/trends.html)
	 */
	this.trends = new Trends(this.config, this.logger);
	/**
	 * ###### Users
	 * [API](/lib/api/users.html) | [CLI](/lib/cli/users.html)
	 */
	this.users = new Users(this.config, this.logger);
	/**
	 * ###### Whitelists
	 * [API](/lib/api/whitelists.html) | [CLI](/lib/cli/whitelists.html)
	 */
	this.whitelists = new Whitelists(this.config, this.logger);

	this.logger.debug('Instantiated Disqus', JSON.stringify(this.config));
}

module.exports = Disqus;
