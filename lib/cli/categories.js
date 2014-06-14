/**
 * [Up one level](/lib/index.html)
 * ### Categories CLI
 * See the disqus-node [Categories API](/lib/api/categories.html).
 *
 * See the [Categories API on Disqus.com](https://disqus.com/api/docs/categories/).
 */
var Disqus = require('../');
var commander = require('commander');
var categories = new commander.Command('disqus categories');
var util = require('../util');

categories
  .usage('<cmd> [options]');

/**
 * ### create
 * Creates a new category.
 *
 * Output of `disqus categories create --help`:
 * ```
 Usage: disqus categories create [options]

 Options:

 -h, --help                 output usage information
 -d, --default [boolean]    Defaults to false
 -f, --forum <string>       Looks up a forum by ID (aka short name). You must be a moderator on the selected forum.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>  Your application's api_secret.
 -t, --title <string>       Maximum length of 50
 * ```
 */
categories
  .command('create')
  .description('Creates a new category.')
  .option('-d, --default [boolean]', 'Defaults to false', false)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name). You must be a moderator on the selected forum.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .option('-t, --title <string>', 'Maximum length of 50')
  .action(function (options) {
    new Disqus(options).categories.create(options, util.printCliResult);
  });

/**
 * ### details
 * Returns category details.
 *
 * Output of `disqus categories details --help`:
 * ```
 Usage: disqus categories details [options]

 Options:

 -h, --help                 output usage information
 -c, --category <string>    Looks up a category by ID.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
categories
  .command('details')
  .description('Returns category details.')
  .option('-c, --category <string>', 'Looks up a category by ID.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .action(function (options) {
    new Disqus(options).categories.details(options, util.printCliResult);
  });

/**
 * ### list
 * Returns a list of categories within a forum.
 *
 * Output of `disqus categories list --help`:
 * ```
 Usage: disqus categories list [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [string]      Defaults to null.
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "asc". Choices: "asc", "desc".
 -s, --since_id [string]    Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
categories
  .command('list')
  .description('Returns a list of categories within a forum.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 25.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: "asc", "desc".', 'asc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .action(function (options) {
    new Disqus(options).categories.list(options, util.printCliResult);
  });

/**
 * ### listPosts
 * Returns a list of posts within a category.
 *
 * Output of `disqus categories listPosts --help`:
 * ```
 Usage: disqus categories listPosts [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [string]      Defaults to null.
 -C, --category <string>    Looks up a category by ID.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -i, --include [array]      Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.
 -l, --limit [number]       Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "asc". Choices: "asc", "desc".
 -q, --query [string]       Defaults to null.
 -r, --related [array]      Defaults to [].
 -s, --since [string]       Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
categories
  .command('listPosts')
  .description('Returns a list of posts within a category.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-C, --category <string>', 'Looks up a category by ID.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --include [array]', 'Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.', ['approved'])
  .option('-l, --limit [number]', 'Defaults to 25.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: "asc", "desc".', 'asc')
  .option('-q, --query [string]', 'Defaults to null.', null)
  .option('-r, --related [array]', 'Defaults to [].', [])
  .option('-s, --since [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .action(function (options) {
    new Disqus(options).categories.listPosts(options, util.printCliResult);
  });

/**
 * ### listThreads
 * Returns a list of threads within a category sorted by the date created.
 *
 * Output of `disqus categories listThreads --help`:
 * ```
 Usage: disqus categories listThreads [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [string]      Defaults to null.
 -C, --category <string>    Looks up a category by ID.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "asc". Choices: "asc", "desc".
 -r, --related [array]      Defaults to [].
 -s, --since [string]       Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
categories
  .command('listThreads')
  .description('Returns a list of threads within a category sorted by the date created.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-C, --category <string>', 'Looks up a category by ID.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 25.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: "asc", "desc".', 'asc')
  .option('-r, --related [array]', 'Defaults to [].', [])
  .option('-s, --since [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .action(function (options) {
    new Disqus(options).categories.listThreads(options, util.printCliResult);
  });

module.exports = categories;
