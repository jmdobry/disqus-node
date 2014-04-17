/**
 * [Up one level](../index.html)
 * ### Applications API
 * See also [Applications CLI](../cli/applications.html)
 */
var Promise = require('bluebird');
var request = Promise.promisify(require('request'));
var parse = require('../util/parse');

module.exports = function Applications(config, logger) {
	this.listUsage = function (options, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				qs.api_key = options.api_key || config.api_key;
				qs.api_secret = options.api_secret || config.api_secret;

				if ('days' in options) {
					qs.days = options.days;
				}
				if ('application' in options) {
					qs.application = options.application;
				}
				var opts = {
					method: 'GET',
					url: config.url + 'applications/listUsage.json',
					qs: qs
				};
				logger.debug(JSON.stringify(opts));
				return request(opts).then(parse);
			}).nodeify(cb);
	};
};
