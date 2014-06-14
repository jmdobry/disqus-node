/**
 * [Up one level](/lib/index.html)
 * ### Imports CLI
 * See the disqus-node [Imports API](/lib/api/imports.html).
 *
 * See the [Imports API on Disqus.com](https://disqus.com/api/docs/imports/).
 */
var commander = require('commander');
var imports = new commander.Command('disqus imports');

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

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -f, --forum <string>     Looks up a forum by ID (aka short name).
 -g, --group <string>     Looks up a group by ID.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 * ```
 */
imports
  .command('details')
  .description('Returns the details for an import.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-g, --group <string>', 'Looks up a group by ID.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function (options) {
    var Disqus = require('../');
    var disqus = new Disqus({
      logLevel: options.logLevel,
      api_key: options.api_key,
      https: options.https
    });

    disqus.imports.details({
      forum: options.forum,
      group: options.group
    }, function (err, result) {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  });

/**
 * ### list
 * Returns a list of all imports.
 *
 * Output of `disqus imports list --help`:
 * ```
 Usage: disqus imports list [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -c, --cursor [string]    Defaults to null.
 -f, --forum <string>     Looks up a forum by ID (aka short name).
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 * ```
 */
imports
  .command('list')
  .description('Returns a list of all imports.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function (options) {
    var Disqus = require('../');
    var disqus = new Disqus({
      logLevel: options.logLevel,
      api_key: options.api_key,
      https: options.https
    });

    disqus.imports.list({
      forum: options.forum,
      cursor: options.cursor
    }, function (err, result) {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  });

module.exports = imports;
