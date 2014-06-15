/**
 * [Up one level](../)
 * ### disqus-node API
 */
var container = require('./container');

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
 *    access_token: 'ACCESS_TOKEN',
 *    logLevel: 'info',
 *    https: true
 *  });
 * ```
 */
function Disqus(options) {
  options = options || {};

  var _this = this;
  var Log = container.get('Log');
  var Applications = container.get('Applications');
  var Blacklists = container.get('Blacklists');
  var Categories = container.get('Categories');
  var Exports = container.get('Exports');
  var Forums = container.get('Forums');
  var Imports = container.get('Imports');
  var Topics = container.get('Topics');
  var Trends = container.get('Trends');
  var Whitelists = container.get('Whitelists');

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
   * Must be a string.
   */
  if ('api_key' in options && typeof options.api_key !== 'string') {
    throw new Error('api_key must be a string!');
  }

  /**
   * ###### api_secret
   * Must be a string. Required.
   */
  if ('api_secret' in options && typeof options.api_secret !== 'string') {
    throw new Error('api_secret must be a string!');
  }

  /**
   * ###### access_token
   * Must be a string. Required for actions that require authentication.
   */
  if ('access_token' in options && typeof options.access_token !== 'string') {
    throw new Error('access_token must be a string!');
  }

  this.config = {
    /**
     * ###### https
     * Must be a boolean. Defaults to `true`.
     *
     * Specifies whether to use https for requests.
     */
    url: (options.https ? 'https' : 'http') + '://disqus.com/api/3.0/',
    availableOptions: ['logLevel', 'api_key', 'api_secret', 'access_token']
  };

  this.config.availableOptions.forEach(function (option) {
    if (option in options) {
      _this.config[option] = options[option];
    }
  });

  this.config.logger = new Log(this.config.logLevel);

  /**
   * ### Resources API
   */
  /**
   * ###### Applications
   * [API](/lib/api/applications.html) | [CLI](/lib/cli/applications.html) | [Disqus](https://disqus.com/api/docs/applications/)
   */
  this.applications = new Applications(this.config);
  /**
   * ###### Blacklists
   * [API](/lib/api/blacklists.html) | [CLI](/lib/cli/blacklists.html) | [Disqus](https://disqus.com/api/docs/blacklists/)
   */
  this.blacklists = new Blacklists(this.config);
  /**
   * ###### Categories
   * [API](/lib/api/categories.html) | [CLI](/lib/cli/categories.html) | [Disqus](https://disqus.com/api/docs/categories/)
   */
  this.categories = new Categories(this.config);
  /**
   * ###### Exports
   * [API](/lib/api/exports.html) | [CLI](/lib/cli/exports.html) | [Disqus](https://disqus.com/api/docs/exports/)
   */
  this.exports = new Exports(this.config);
  /**
   * ###### Forums
   * [API](/lib/api/forums.html) | [CLI](/lib/cli/forums.html) | [Disqus](https://disqus.com/api/docs/forums/)
   */
  this.forums = new Forums(this.config);
  /**
   * ###### Imports
   * [API](/lib/api/imports.html) | [CLI](/lib/cli/imports.html) | [Disqus](https://disqus.com/api/docs/imports/)
   */
  this.imports = new Imports(this.config);
  /**
   * ###### Topics
   * [API](/lib/api/topics.html) | [CLI](/lib/cli/topics.html) | [Disqus](https://disqus.com/api/docs/topics/)
   */
  this.topics = new Topics(this.config);
  /**
   * ###### Trends
   * [API](/lib/api/trends.html) | [CLI](/lib/cli/trends.html) | [Disqus](https://disqus.com/api/docs/trends/)
   */
  this.trends = new Trends(this.config);
  /**
   * ###### Whitelists
   * [API](/lib/api/whitelists.html) | [CLI](/lib/cli/whitelists.html) | [Disqus](https://disqus.com/api/docs/whitelists/)
   */
  this.whitelists = new Whitelists(this.config);

  this.config.logger.debug('Instantiated Disqus', JSON.stringify(this.config, function (key, value) {
    if (key === 'logger') {
      return null;
    } else if (key === 'availableOptions') {
      return null;
    } else {
      return value;
    }
  }));
}

module.exports = Disqus;
