/**
 * [Up one level](/lib/index.html)
 * ### Posts CLI
 * See the disqus-node [Posts API](/lib/api/posts.html).
 *
 * See the [Posts API on Disqus.com](https://disqus.com/api/docs/posts/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var posts = new Command('disqus posts');

posts
  .usage('<cmd> [options]');

/**
 * ### approve
 * Approves the requested post(s).
 *
 * Output of `disqus posts approve --help`:
 * ```
 Usage: disqus posts approve [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>          Looks up a post by ID. You must be a moderator on the selected post's forum.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
posts
  .command('approve')
  .description('Approves the requested post(s).')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID. You must be a moderator on the selected post\'s forum.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.approve(options, container.get('util').printCliResult);
  });

/**
 * ### create
 * Creates a new post.
 *
 * Output of `disqus posts create --help`:
 * ```
 Usage: disqus posts create [options]

 Options:

 -h, --help                   output usage information
 -d, --date [string]          Defaults to null. Unix timestamp (or ISO datetime standard).
 -e, --author_email [string]  Defaults to null. Email address (defined by RFC 5322).
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -i, --ip_address [string]    Defaults to null. IP address (defined by RFC 5322).
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -m, --message <string>       The content of the post.
 -n, --author_name [string]   Defaults to null.
 -p, --parent_id [string]     Looks up a post by ID.
 -S, --api_secret <string>    Your application's api_secret.
 -t, --thread [string]        Looks up a thread by ID.
 * ```
 */
posts
  .command('create')
  .description('Creates a new post.')
  .option('-d, --date [string]', 'Defaults to null. Unix timestamp (or ISO datetime standard).', null)
  .option('-e, --author_email [string]', 'Defaults to null. Email address (defined by RFC 5322).', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --ip_address [string]', 'Defaults to null. IP address (defined by RFC 5322).', null)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-m, --message <string>', 'The content of the post.')
  .option('-n, --author_name [string]', 'Defaults to null.', null)
  .option('-p, --parent_id [string]', 'Looks up a post by ID.', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --thread [string]', 'Looks up a thread by ID.', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    options.parent_id = options.parent;
    delete options.parent_id;
    new Disqus(options).posts.create(options, container.get('util').printCliResult);
  });

/**
 * ### details
 * Returns information about a post.
 *
 * Output of `disqus posts details --help`:
 * ```
 Usage: disqus posts details [options]

 Options:

 -h, --help                 output usage information
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>        Looks up a post by ID.
 -r, --related [array]      You may specify relations to include with your response. Choices: forum, thread.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
posts
  .command('details')
  .description('Returns information about a post.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID.')
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: forum, thread.', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.details(options, container.get('util').printCliResult);
  });

/**
 * ### getContext
 * Returns the hierarchal tree of a post (all parents).
 *
 * Output of `disqus posts getContext --help`:
 * ```
 Usage: disqus posts getContext [options]

 Options:

 -h, --help                 output usage information
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>        Looks up a post by ID.
 -r, --related [array]      You may specify relations to include with your response. Choices: forum, thread.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
posts
  .command('getContext')
  .description('Returns the hierarchal tree of a post (all parents).')
  .option('-d, --depth [number]', 'Defaults to 10. Minimum value of 1. Maximum value of 10.', 10)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID.')
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: forum, thread.', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.getContext(options, container.get('util').printCliResult);
  });

/**
 * ### list
 * Returns a list of posts ordered by the date created.
 *
 * Output of `disqus posts list --help`:
 * ```
 Usage: disqus posts list [options]

 Options:

 -h, --help                 output usage information
 -c, --category [string]    Defaults to null. Looks up a category by ID.
 -C, --cursor [string]      Defaults to null.
 -f, --forum [string]       Defaults to null. Defaults to all forums you moderate. Use :all to retrieve all forums.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -i, --include [array]      Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.
 -l, --limit [number]       Defaults to 25. Maximum value of 100.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "desc". Choices: asc, desc.
 -q, --query [string]       Defaults to null.
 -r, --related [array]      You may specify relations to include with your response. Choices: forum, thread.
 -s, --since [string]       Defaults to null. Unix timestamp (or ISO datetime standard).
 -S, --api_secret <string>  Your application's api_secret.
 -r, --thread [string]      Defaults to null. Looks up a thread by ID.
 * ```
 */
posts
  .command('list')
  .description('Returns a list of posts ordered by the date created.')
  .option('-c, --category [string]', 'Defaults to null. Looks up a category by ID.', null)
  .option('-C, --cursor [string]', 'Defaults to null.', null)
  .option('-f, --forum [string]', 'Defaults to null. Defaults to all forums you moderate. Use :all to retrieve all forums.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --include [array]', 'Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.', ['approved'])
  .option('-l, --limit [number]', 'Defaults to 25. Maximum value of 100.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "desc". Choices: asc, desc.', 'desc')
  .option('-q, --query [string]', 'Defaults to null.', null)
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: forum, thread.', [])
  .option('-s, --since [string]', 'Defaults to null. Unix timestamp (or ISO datetime standard).', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-r, --thread [string]', 'Defaults to null. Looks up a thread by ID.', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.list(options, container.get('util').printCliResult);
  });

/**
 * ### listPopular
 * Returns a list of posts ordered by the number of likes recently.
 *
 * Output of `disqus posts listPopular --help`:
 * ```
 Usage: disqus posts listPopular [options]

 Options:

 -h, --help                 output usage information
 -c, --category [string]    Defaults to null. Looks up a category by ID.
 -f, --forum [string]       Defaults to null. Defaults to all forums you moderate. Use :all to retrieve all forums.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -i, --include [array]      Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.
 -I, --interval [string]    Defaults to "7d". Choices: 1h, 6h, 12h, 1d, 3d, 7d, 30d, 60d, 90d.
 -l, --limit [number]       Defaults to 25. Maximum value of 100.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "popular". Choices: popular, best.
 -O, --offset [number]      Defaults to 0.
 -q, --query [string]       Defaults to null.
 -r, --related [array]      You may specify relations to include with your response. Choices: forum, thread.
 -S, --api_secret <string>  Your application's api_secret.
 -r, --thread [string]      Defaults to null. Looks up a thread by ID.
 * ```
 */
posts
  .command('listPopular')
  .description('Returns a list of posts ordered by the number of likes recently.')
  .option('-c, --category [string]', 'Defaults to null. Looks up a category by ID.', null)
  .option('-f, --forum [string]', 'Defaults to null. Defaults to all forums you moderate. Use :all to retrieve all forums.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --include [array]', 'Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.', ['approved'])
  .option('-I, --interval [string]', 'Defaults to "7d". Choices: 1h, 6h, 12h, 1d, 3d, 7d, 30d, 60d, 90d.', '7d')
  .option('-l, --limit [number]', 'Defaults to 25. Maximum value of 100.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "popular". Choices: popular, best.', 'popular')
  .option('-O, --offset [number]', 'Defaults to 0.', 0)
  .option('-q, --query [string]', 'Defaults to null.', null)
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: forum, thread.', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-r, --thread [string]', 'Defaults to null. Looks up a thread by ID.', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.listPopular(options, container.get('util').printCliResult);
  });

/**
 * ### remove
 * Deletes the requested post(s).
 *
 * Output of `disqus posts remove --help`:
 * ```
 Usage: disqus posts remove [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>          Looks up a post by ID.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
posts
  .command('remove')
  .description('Deletes the requested post(s).')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.remove(options, container.get('util').printCliResult);
  });

/**
 * ### restore
 * Undeletes the requested post(s).
 *
 * Output of `disqus posts restore --help`:
 * ```
 Usage: disqus posts restore [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>          Looks up a post by ID.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
posts
  .command('restore')
  .description('Undeletes the requested post(s).')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.restore(options, container.get('util').printCliResult);
  });

/**
 * ### restore
 * Undeletes the requested post(s).
 *
 * Output of `disqus posts restore --help`:
 * ```
 Usage: disqus posts restore [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>          Looks up a post by ID.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
posts
  .command('restore')
  .description('Undeletes the requested post(s).')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.restore(options, container.get('util').printCliResult);
  });

/**
 * ### spam
 * Marks the requested post(s) as spam.
 *
 * Output of `disqus posts spam --help`:
 * ```
 Usage: disqus posts spam [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>          Looks up a post by ID. You must be a moderator on the selected post's forum.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
posts
  .command('spam')
  .description('Marks the requested post(s) as spam.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID. You must be a moderator on the selected post\'s forum.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.spam(options, container.get('util').printCliResult);
  });

/**
 * ### update
 * Updates information on a post.
 *
 * Output of `disqus posts update --help`:
 * ```
 Usage: disqus posts update [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -m, --message <string>       The updated content of the post.
 -p, --post <string>          Looks up a post by ID. You must be a moderator on the selected post's forum.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
posts
  .command('update')
  .description('Updates information on a post.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-m, --message <string>', 'The updated content of the post.')
  .option('-p, --post <string>', 'Looks up a post by ID. You must be a moderator on the selected post\'s forum.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.update(options, container.get('util').printCliResult);
  });

/**
 * ### vote
 * Register a vote on a post.
 *
 * Output of `disqus posts vote --help`:
 * ```
 Usage: disqus posts vote [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -p, --post <string>          Looks up a post by ID. You must be a moderator on the selected post's forum.
 -S, --api_secret <string>    Your application's api_secret.
 -v, --vote <string>          Choices: -1, 0, 1.
 * ```
 */
posts
  .command('vote')
  .description('Register a vote on a post.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-p, --post <string>', 'Looks up a post by ID. You must be a moderator on the selected post\'s forum.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-v, --vote <string>', 'Choices: -1, 0, 1.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).posts.vote(options, container.get('util').printCliResult);
  });

module.exports = posts;
