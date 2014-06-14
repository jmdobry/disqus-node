/**
 * [Up one level](/lib/index.html)
 * ### Blacklists CLI
 * See the disqus-node [Blacklists API](/lib/api/blacklists.html).
 *
 * See the [Blacklists API on Disqus.com](https://disqus.com/api/docs/blacklists/).
 */
var Disqus = require('../');
var commander = require('commander');
var blacklists = new commander.Command('disqus blacklists');
var util = require('../util');

blacklists
  .usage('<cmd> [options] [args]');


/**
 * ### add
 * Adds an entry to the blacklist.
 *
 * Output of `disqus blacklists add --help`:
 * ```
 Usage: disqus blacklists add [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -d --domain [array]          Domain Name. Defaults to [].
 -e --email [array]           Email address (defined by RFC 5322). Defaults to [].
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -H --https [boolean]         Whether to use https. Defaults to true.
 -i --ip [array]              IP address in CIDR notation. Defaults to [].
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -n --notes [string]          Maximum length of 50. Defaults to "".
 -r --retroactive [boolean]   Defaults to false.
 -S, --api_secret <string>    Your applications's api_secret.
 -u --user [array]            Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].
 -w --word [array]            Maximum length of 200. Defaults to [].
 * ```
 */
blacklists
  .command('add')
  .description('Adds an entry to the blacklist.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-d --domain [array]', 'Domain Name. Defaults to [].', [])
  .option('-e --email [array]', 'Email address (defined by RFC 5322). Defaults to [].', [])
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i --ip [array]', 'IP address in CIDR notation. Defaults to [].', [])
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-n --notes [string]', 'Maximum length of 50. Defaults to "".', [])
  .option('-r --retroactive [boolean]', 'Defaults to false.', false)
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .option('-u --user [array]', 'Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].', [])
  .option('-w --word [array]', 'Maximum length of 200. Defaults to [].', [])
  .action(function (options) {
    new Disqus(options).blacklists.add(options, util.printCliResult);
  });

/**
 * ### list
 * Returns a list of all blacklist entries.
 *
 * Output of `disqus blacklists list --help`:
 * ```
 Usage: disqus blacklists list [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -c --cursor [cursor]         Defaults to null,
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -H --https [boolean]         Whether to use https. Defaults to true.
 -i --since_id [id]           Defaults to null.
 -l --limit [number]          Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o --order [string]          Choices: asc, desc. Defaults to "asc".
 -q --query [query]           Choices: domain, word, ip, user, thread_slug, email. Defaults to null.
 -r --related [array]         You may specify relations to include with your response. Choices: forum.
 -s --since [number]          Unix timestamp (or ISO datetime standard)
 -S, --api_secret <string>    Your applications's api_secret.
 * ```
 */
blacklists
  .command('list')
  .description('Returns a list of all blacklist entries.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-c --cursor [cursor]', 'Defaults to null,', null)
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i --since_id [id]', 'Defaults to null.', null)
  .option('-l --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o --order [string]', 'Choices: asc, desc. Defaults to "asc".', 'asc')
  .option('-q --query [query]', 'Choices: domain, word, ip, user, thread_slug, email. Defaults to null.', null)
  .option('-r --related [array]', 'You may specify relations to include with your response. Choices: forum.', [])
  .option('-s --since [number]', 'Unix timestamp (or ISO datetime standard)', null)
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .action(function (options) {
    new Disqus(options).blacklists.list(options, util.printCliResult);
  });

/**
 * ### remove
 * Removes an entry from the blacklist.
 *
 * Output of `disqus blacklists remove --help`:
 * ```
 Usage: disqus blacklists remove [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -d --domain [array]          Domain Name. Defaults to [].
 -f --forum <string>          Looks up a forum by ID (aka short name).
 -e --email [array]           Email address (defined by RFC 5322). Defaults to [].
 -H --https [boolean]         Whether to use https. Defaults to true.
 -i --ip [array]              IP address in CIDR notation. Defaults to [].
 -S, --api_secret <string>    Your applications's api_secret.
 -u --user [array]            Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].
 -w --word [array]            Maximum length of 200. Defaults to [].
 * ```
 */
blacklists
  .command('remove')
  .description('Removes an entry from the blacklist.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-d --domain [array]', 'Domain Name. Defaults to [].', [])
  .option('-f --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-e --email [array]', 'Email address (defined by RFC 5322). Defaults to [].', [])
  .option('-H --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i --ip [array]', 'IP address in CIDR notation. Defaults to [].', [])
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .option('-u --user [array]', 'Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].', [])
  .option('-w --word [array]', 'Maximum length of 200. Defaults to [].', [])
  .action(function (forumId, options) {
    new Disqus(options).blacklists.remove(options, util.printCliResult);
  });

module.exports = blacklists;
