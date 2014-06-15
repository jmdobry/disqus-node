/**
 * [Up one level](/lib/index.html)
 * ### Whitelists CLI
 * See the disqus-node [Whitelists API](/lib/api/whitelists.html).
 *
 * See the [Whitelists API on Disqus.com](https://disqus.com/api/docs/whitelists/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var whitelists = new Command('disqus whitelists');

whitelists
  .usage('<cmd> [options]');

/**
 * ### add
 * Adds an entry to the whitelist.
 *
 * Output of `disqus whitelists add --help`:
 * ```
 Usage: disqus whitelists add [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -e --email [array]           Defaults to []. Email address (defined by RFC 5322).
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -H --https [boolean]         Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -n, --notes [string]         Defaults to "". Maximum length of 50.
 -S, --api_secret <string>    Your application's api_secret.
 -u, --user [array]           Defaults to []. Looks up a user by ID. You may look up a user by username using the "username" query type.
 * ```
 */
whitelists
  .command('add')
  .description('Adds an entry to the whitelist.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-e --email [array]', 'Defaults to []. Email address (defined by RFC 5322).', [])
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-n, --notes [string]', 'Defaults to "". Maximum length of 50.', '')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-u, --user [array]', 'Defaults to []. Looks up a user by ID. You may look up a user by username using the "username" query type.', [])
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).whitelists.add(options, container.get('util').printCliResult);
  });

/**
 * ### list
 * Returns a list of all whitelist entries.
 *
 * Output of `disqus whitelists list --help`:
 * ```
 Usage: disqus whitelists list [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -c --cursor [string]         Defaults to null.
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -H --https [boolean]         Whether to use https. Defaults to true.
 -i, --since_id [string]      Defaults to null.
 -l --limit [number]          Defaults to 25. Maximum value of 100.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]         Defaults to "asc". Choices: asc, desc.
 -q, --query [string]         Defaults to null.
 -r, --related [array]        Defaults to []. You may specify relations to include with your response. Choices: forum.
 -s, --since [string]         Defaults to null. Unix timestamp (or ISO datetime standard).
 -S, --api_secret <string>    Your application's api_secret.
 -t, --type [string]          Defaults to null. Choices: email, user.
 * ```
 */
whitelists
  .command('list')
  .description('Returns a list of all whitelist entries.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-c --cursor [string]', 'Defaults to null.', null)
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --since_id [string]', 'Defaults to null.', null)
  .option('-l --limit [number]', 'Defaults to 25. Maximum value of 100.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: asc, desc.', 'asc')
  .option('-q, --query [string]', 'Defaults to null.', null)
  .option('-r, --related [array]', 'Defaults to []. You may specify relations to include with your response. Choices: forum.', [])
  .option('-s, --since [string]', 'Defaults to null. Unix timestamp (or ISO datetime standard).', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --type [string]', 'Defaults to null. Choices: email, user.', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).whitelists.list(options, container.get('util').printCliResult);
  });

/**
 * ### remove
 * Removes an entry from the whitelists.
 *
 * Output of `disqus whitelists remove --help`:
 * ```
 Usage: disqus whitelists remove [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -e --email [array]           Defaults to []. Email address (defined by RFC 5322).
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -H --https [boolean]         Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 -u, --user [array]           Defaults to [].
 * ```
 */
whitelists
  .command('remove')
  .description('Removes an entry from the blacklist.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-e --email [array]', 'Defaults to []. Email address (defined by RFC 5322).', [])
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-u, --user [array]', 'Defaults to [].', [])
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).whitelists.remove(options, container.get('util').printCliResult);
  });

module.exports = whitelists;
