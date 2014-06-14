/**
 * [Up one level](../)
 * ### disqus-node API
 */
var Log = require('log');
var Applications = require('./api/applications');
var Blacklists = require('./api/blacklists');
var Categories = require('./api/categories');

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
    availableOptions: ['logLevel', 'api_key', 'api_secret', 'access_token']
  };

  this.config.availableOptions.forEach(function (option) {
    if (option in options) {
      _this.config[option] = options[option];
    }
  });

  this.logger = new Log(this.config.logLevel);

  /**
   * ### Resources API
   */
  /**
   * ###### Applications
   * [API](/lib/api/applications.html) | [CLI](/lib/cli/applications.html) | [Disqus](https://disqus.com/api/docs/applications/)
   */
  this.applications = new Applications(this.config, this.logger);
  /**
   * ###### Blacklists
   * [API](/lib/api/blacklists.html) | [CLI](/lib/cli/blacklists.html) | [Disqus](https://disqus.com/api/docs/blacklists/)
   */
  this.blacklists = new Blacklists(this.config, this.logger);
  /**
   * ###### Categories
   * [API](/lib/api/categories.html) | [CLI](/lib/cli/categories.html) | [Disqus](https://disqus.com/api/docs/categories/)
   */
  this.categories = new Categories(this.config, this.logger);

  this.logger.debug('Instantiated Disqus', JSON.stringify(this.config));
}

module.exports = Disqus;
