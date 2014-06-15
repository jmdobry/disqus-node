/**
 * [Up one level](/lib/index.html)
 * ### Trends CLI
 * See the disqus-node [Trends API](/lib/api/trends.html).
 *
 * See the [Trends API on Disqus.com](https://disqus.com/api/docs/trends/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var trends = new Command('disqus trends');

trends
  .usage('<cmd> [options]');

/**
 * ### listThreads
 * Returns a list of trending threads.
 *
 * Output of `disqus trends listThreads --help`:
 * ```
 Usage: disqus trends listThreads [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum [string]         Defaults to null.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -l, --limit [number]         Defaults to 10. Maximum value of 10.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -r, --related [array]        Defaults to []. You may specify relations to include with your response. Choices: forum, author, category
 -S, --api_secret <string>    Your application's api_secret.
 -t, --target <string>        Looks up a topic by ID (slug).
 * ```
 */
trends
  .command('listThreads')
  .description('Returns a list of trending threads.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 10. Maximum value of 10.', 10)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-r, --related [array]', 'Defaults to []. You may specify relations to include with your response. Choices: forum, author, category', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).trends.listThreads(options, container.get('util').printCliResult);
  });

module.exports = trends;
