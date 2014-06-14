/**
 * [Up one level](/lib/index.html)
 * ### Exports CLI
 * See the disqus-node [Exports API](/lib/api/exports.html).
 *
 * See the [Exports API on Disqus.com](https://disqus.com/api/docs/exports/).
 */
var Disqus = require('../');
var commander = require('commander');
var exports = new commander.Command('disqus exports');
var util = require('../util');

exports
  .usage('<cmd> [options]');

/**
 * ### exportForum
 * Exports a forum.
 *
 * Output of `disqus exports exportForum --help`:
 * ```
 Usage: disqus exports exportForum [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -F --format [string]         Defaults to "xml". Choices: xml.
 -H --https [boolean]         Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
exports
  .command('exportForum')
  .description('Exports a forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-F --format [string]', 'Defaults to "xml". Choices: xml.', 'xml')
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .action(function (options) {
    new Disqus(options).exports.exportForum(options, util.printCliResult);
  });

module.exports = exports;
