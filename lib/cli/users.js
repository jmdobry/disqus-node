/**
 * [Up one level](/lib/index.html)
 * ### Users CLI
 * See the disqus-node [Users API](/lib/api/trends.html).
 *
 * See the [Users API on Disqus.com](https://disqus.com/api/docs/trends/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var users = new Command('disqus users');

users
  .usage('<cmd> [options]');

/**
 * ### listPosts
 * Returns a list of trending threads.
 *
 * Output of `disqus users listPosts --help`:
 * ```
 Usage: disqus users listPosts [options]

 Options:

 -C, --cursor [string]         Defaults to null.
 -H, --https [boolean]         Whether to use https. Defaults to true.
 -i, --include [array]         Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.'
 -l, --limit [number]          Defaults to 25. Maximum value of 100.'
 -L, --logLevel [string]       Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]          Defaults to "desc". Choices: asc, desc.
 -r, --related [array]      You may specify relations to include with your response. Choices: forum, thread.
 -S, --api_secret <string>     Your application\'s api_secret.
 -s, --since [string]          Defaults to null. Unix timestamp (or ISO datetime standard).
 -u, --user <number|string>    Looks up a user by ID or username.
 * ```
 */
users
  .command('listPosts')
  .description('Returns a list of posts.')
  .option('-C, --cursor [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --include [array]', 'Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.', ['approved'])
  .option('-l, --limit [number]', 'Defaults to 25. Maximum value of 100.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "desc". Choices: asc, desc.', 'desc')
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: forum, thread.', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-s, --since [string]', 'Defaults to null. Unix timestamp (or ISO datetime standard).', null)
  .option('-u, --user <number|string>', 'Looks up a user by ID or username.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).users.listPosts(options, container.get('util').printCliResult);
  });

module.exports = users;
