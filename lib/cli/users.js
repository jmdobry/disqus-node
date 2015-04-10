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

 -h, --help                   output usage information
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -l, --limit [number]         Defaults to 10. Maximum value of 10.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -r, --related [array]        Defaults to []. You may specify relations to include with your response. Choices: forum, author, category
 -S, --api_secret <string>    Your application's api_secret.
 -u, --user <number|string>   Looks up a user by ID or username.
 * ```
 */
users
  .command('listPosts')
  .description('Returns a list of posts.')
  .option('-f, --forum [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 10. Maximum value of 10.', 10)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-r, --related [array]', 'Defaults to []. You may specify relations to include with your response. Choices: forum, author, category', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-u, --user <number|string>', 'Looks up a user by ID or username.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).users.listPosts(options, container.get('util').printCliResult);
  });

module.exports = users;
