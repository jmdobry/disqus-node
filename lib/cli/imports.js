/**
 * [Up one level](/lib/index.html)
 * ### Imports CLI
 * See the disqus-node [Imports API](/lib/api/imports.html).
 *
 * See the [Imports API on Disqus.com](https://disqus.com/api/docs/imports/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var imports = new Command('disqus imports');

imports
  .usage('<cmd> [options]');

/**
 * ### details
 * Returns the details for an import.
 *
 * Output of `disqus imports details --help`:
 * ```
 Usage: disqus imports details [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum <string>         Looks up a forum by ID (aka short name).
 -g, --group <string>         Looks up a group by ID.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
imports
  .command('details')
  .description('Returns the details for an import.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-g, --group <string>', 'Looks up a group by ID.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).imports.details(options, container.get('util').printCliResult);
  });

/**
 * ### list
 * Returns a list of all imports.
 *
 * Output of `disqus imports list --help`:
 * ```
 Usage: disqus imports list [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum <string>         Looks up a forum by ID (aka short name).
 -c, --cursor [string]        Defaults to null.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
imports
  .command('list')
  .description('Returns a list of all imports.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).imports.list(options, container.get('util').printCliResult);
  });

module.exports = imports;
