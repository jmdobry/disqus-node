var Promise = require('bluebird');
var request = Promise.promisify(require('request'));

function parse(res) {
  var json;
  try {
    json = JSON.parse(res[1]);
  } catch (err) {
    throw new Error('Failed to parse response from Disqus.');
  }
  if (!('code' in json) || (json.code !== '0' && json.code !== 0)) {
    throw new Error(json.response);
  }
  return json.response;
}

function serialize(qs) {
  return qs;
}

function applyRequiredOptions(requiredOpts, options, config, qs) {
  requiredOpts.forEach(function (option) {
    if (option in options) {
      qs[option] = options[option];
    }
    if (option in config) {
      qs[option] = config[option];
    }
    if (!(option in qs)) {
      throw new Error(option + ' is required!');
    }
  });
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

  request: request,

  executeAPIMethod: function (method, options, config, cb) {
    return Promise.resolve({})
      .then(function (qs) {
        options = options || {};
        applyRequiredOptions(method.requiredOptions, options, config, qs);
        applyOptions(method.availableOptions, options, config, qs);

        var opts = {
          method: method.method,
          url: config.url + method.resource + '/' + method.name + '.json',
          qs: serialize(qs)
        };
        config.logger.debug(JSON.stringify(opts));
        return request(opts).then(parse);
      }).nodeify(cb);
  },

  printCliResult: function printCliResult(err, result) {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(JSON.stringify(result, null, 2));
    }
  }
};
