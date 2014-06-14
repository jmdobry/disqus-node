/**
 * [Up one level](/lib/index.html)
 * ### Topics CLI
 * See the disqus-node [Topics API](/lib/api/topics.html).
 *
 * See the [Topics API on Disqus.com](https://disqus.com/api/docs/topics/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var topics = new Command('disqus topics');

topics
  .usage('<cmd> [options]');

/**
 * ### follow
 * Follow a topic.
 *
 * Output of `disqus topics follow --help`:
 * ```
 Usage: disqus topics follow [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 -t, --target <string>        Looks up a topic by ID (slug).
 * ```
 */
topics
  .command('follow')
  .description('Follow a topic.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).topics.follow(options, container.get('util').printCliResult);
  });

/**
 * ### listFollowers
 * Returns a list of users following a topic.
 *
 * Output of `disqus topics listFollowers --help`:
 * ```
 Usage: disqus topics listFollowers [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [string]      Defaults to null.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "asc". Choices: asc, desc.
 -s, --since_id [string]    Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 -t, --topic <string>       Looks up a topic by ID (slug).
 * ```
 */
topics
  .command('listFollowers')
  .description('Returns a list of users following a topic.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 25.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: asc, desc.', 'asc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --topic <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).topics.listFollowers(options, container.get('util').printCliResult);
  });

/**
 * ### unfollow
 * Unfollow a topic.
 *
 * Output of `disqus topics unfollow --help`:
 * ```
 Usage: disqus topics unfollow [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 -t, --target <string>        Looks up a topic by ID (slug).
 * ```
 */
topics
  .command('unfollow')
  .description('Unfollow a topic.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).topics.unfollow(options, container.get('util').printCliResult);
  });

module.exports = topics;
