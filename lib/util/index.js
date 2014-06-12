var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

function parse(res) {
	var json = JSON.parse(res[1]);
	if (!('code' in json) || (json.code !== '0' && json.code !== 0)) {
		throw new Error(json.response);
	}
	return json.response;
}

function serialize(qs) {
	return qs;
}

function applyOptions(availableOpts, options, config, qs) {
	availableOpts.forEach(function (option) {
		if (option in options) {
			qs[option] = options[option];
		}
		if (option in config) {
			qs[option] = config[option];
		}
	});
}

module.exports = {

	parse: parse,

	serialize: serialize,

	applyOptions: applyOptions,

	request: request,

	executeAPIMethod: function (method, options, config, logger, cb) {
		return Promise.resolve({})
			.then(function (qs) {
				options = options || {};
				applyOptions(method.availableOptions[method.name], options, config, qs);

				var opts = {
					method: method.method,
					url: config.url + method.resource + '/' + method.name + '.json',
					qs: serialize(qs)
				};
				logger.debug(JSON.stringify(opts));
				return request(opts).then(parse);
			}).nodeify(cb);
	}
};
