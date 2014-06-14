/**
 * [Up one level](/lib/index.html)
 * ### Applications CLI
 * See the disqus-node [Applications API](/lib/api/applications.html).
 *
 * See the [Applications API on Disqus.com](https://disqus.com/api/docs/applications/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var applications = new Command('disqus applications');

applications
  .usage('<cmd> [options]');

/**
 * ### listUsage
 * Returns the API usage per day for this application.
 *
 * Output of `disqus applications listUsage --help`:
 * ```
 Usage: disqus applications listUsage [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -a, --application [string]   Defaults to null.
 -d, --days [number]          Maximum value of 30. Defaults to 30.
 -H --https [boolean]         Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
applications
  .command('listUsage')
  .description('Returns the API usage per day for this application.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-a, --application [string]', 'Defaults to null.', null)
  .option('-d, --days [number]', 'Maximum value of 30. Defaults to 30.', parseInt, 30)
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).applications.listUsage(options, container.get('util').printCliResult);
  });

module.exports = applications;
