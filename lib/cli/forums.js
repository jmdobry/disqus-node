/**
 * [Up one level](/lib/index.html)
 * ### Forums CLI
 * See the disqus-node [Forums API](/lib/api/forums.html).
 *
 * See the [Forums API on Disqus.com](https://disqus.com/api/docs/forums/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var forums = new Command('disqus forums');

forums
  .usage('<cmd> [options]');

/**
 * ### addModerator
 * Adds a moderator to a forum.
 *
 * Output of `disqus forums addModerator --help`:
 * ```
 Usage: disqus forums addModerator [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum <string>         Looks up a forum by ID (aka short name). You must be a moderator on the selected forum.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 -u, --user <string>          Looks up a user by ID. You may look up a user by username using the "username" query type.
 * ```
 */
forums
  .command('addModerator')
  .description('Adds a moderator to a forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name). You must be a moderator on the selected forum.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-u, --user <string>', 'Looks up a user by ID. You may look up a user by username using the "username" query type.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.addModerator(options, container.get('util').printCliResult);
  });

/**
 * ### create
 * Creates a new forum.
 *
 * Output of `disqus forums create --help`:
 * ```
 Usage: disqus forums create [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -n, --name <string>          Name of new forum.
 -s, --short_name <string>    Short name of new forum.
 -S, --api_secret <string>    Your application's api_secret.
 -w, --website <string>       URL (defined by RFC 3986).
 * ```
 */
forums
  .command('create')
  .description('Creates a new forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-n, --name <string>', 'Name of new forum.')
  .option('-s, --short_name <string>', 'Short name of new forum.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-w, --website <string>', 'URL (defined by RFC 3986).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.create(options, container.get('util').printCliResult);
  });

/**
 * ### details
 * Returns forum details.
 *
 * Output of `disqus forums details --help`:
 * ```
 Usage: disqus forums details [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum <string>         Looks up a forum by ID (aka short name).
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -r, --related [array]        Defaults to []. You may specify relations to include with your response. Choices: author.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
forums
  .command('details')
  .description('Returns forum details.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-r, --related [array]', 'Defaults to []. You may specify relations to include with your response. Choices: author.', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.details(options, container.get('util').printCliResult);
  });

/**
 * ### follow
 * Follow a forum.
 *
 * Output of `disqus forums follow --help`:
 * ```
 Usage: disqus forums follow [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 -t, --target <string>        Looks up a forum by ID (aka short name).
 * ```
 */
forums
  .command('follow')
  .description('Follow a forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a forum by ID (aka short name).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.follow(options, container.get('util').printCliResult);
  });

/**
 * ### installed
 * Returns true if forum has one or more views.
 *
 * Output of `disqus forums installed --help`:
 * ```
 Usage: disqus forums installed [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum <string>         Looks up a forum by ID (aka short name).
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
forums
  .command('installed')
  .description('Returns true if forum has one or more views.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.installed(options, container.get('util').printCliResult);
  });

/**
 * ### listCategories
 * Returns a list of categories within a forum.
 *
 * Output of `disqus forums listCategories --help`:
 * ```
 Usage: disqus forums listCategories [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: asc, desc. Defaults to "asc".
 -s, --since_id [string]    Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listCategories')
  .description('Returns a list of categories within a forum.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: asc, desc. Defaults to "asc".', 'asc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listCategories(options, container.get('util').printCliResult);
  });

/**
 * ### listFollowers
 * Returns a list of users following a forum.
 *
 * Output of `disqus forums listFollowers --help`:
 * ```
 Usage: disqus forums listFollowers [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: asc, desc. Defaults to "asc".
 -s, --since_id [string]    Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listFollowers')
  .description('Returns a list of users following a forum.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: asc, desc. Defaults to "asc".', 'asc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listFollowers(options, container.get('util').printCliResult);
  });

/**
 * ### listModerators
 * Returns a list of all moderators on a forum.
 *
 * Output of `disqus forums listModerators --help`:
 * ```
 Usage: disqus forums listModerators [options]

 Options:

 -h, --help                 output usage information
 -A, --access_token <string>  Your access token.
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listModerators')
  .description('Returns a list of all moderators on a forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listModerators(options, container.get('util').printCliResult);
  });

/**
 * ### listMostActiveUsers
 * Returns a list of users active within a forum ordered by most comments made.
 *
 * Output of `disqus forums listMostActiveUsers --help`:
 * ```
 Usage: disqus forums listMostActiveUsers [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: asc, desc. Defaults to "asc".
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listMostActiveUsers')
  .description('Returns a list of users active within a forum ordered by most comments made.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: desc. Defaults to "desc".', 'desc')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listMostActiveUsers(options, container.get('util').printCliResult);
  });

/**
 * ### listMostLikedUsers
 * Returns a list of users active within a forum ordered by most likes received.
 *
 * Output of `disqus forums listMostLikedUsers --help`:
 * ```
 Usage: disqus forums listMostLikedUsers [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: asc, desc. Defaults to "asc".
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listMostLikedUsers')
  .description('Returns a list of users active within a forum ordered by most likes received.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: desc. Defaults to "desc".', 'desc')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listMostLikedUsers(options, container.get('util').printCliResult);
  });

/**
 * ### listPosts
 * Returns a list of posts within a forum.
 *
 * Output of `disqus forums listPosts --help`:
 * ```
 Usage: disqus forums listPosts [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -i, --include [array]      Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.
 -l, --limit [number]       Maximum number of posts to return. Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: asc, desc. Defaults to "desc".
 -q, --query [string]       Defaults to null.
 -r, --related [array]      You may specify relations to include with your response. Choices: thread.
 -s, --since [string]       Unix timestamp (or ISO datetime standard).
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listPosts')
  .description('Returns a list of posts within a forum.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --include [array]', 'Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.', ['approved'])
  .option('-l, --limit [number]', 'Maximum number of posts to return. Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: asc, desc. Defaults to "desc".', 'desc')
  .option('-q, --query [string]', 'Defaults to null.', null)
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: thread.', [])
  .option('-s, --since [string]', 'Unix timestamp (or ISO datetime standard).', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listPosts(options, container.get('util').printCliResult);
  });

/**
 * ### listThreads
 * Returns a list of posts within a forum.
 *
 * Output of `disqus forums listThreads --help`:
 * ```
 Usage: disqus forums listThreads [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -i, --include [array]      Defaults to ["approved"]. Choices: open, closed, killed.
 -l, --limit [number]       Maximum number of posts to return. Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: asc, desc. Defaults to "desc".
 -q, --query [string]       Defaults to null.
 -r, --related [array]      You may specify relations to include with your response. Choices: thread.
 -s, --since [string]       Unix timestamp (or ISO datetime standard).
 -S, --api_secret <string>  Your application's api_secret.
 -t, --thread [array]       Looks up a thread by ID. You may pass us the "ident" query type instead of an ID by including "forum". You may pass us the "link" query type to filter by URL. You must pass the "forum" if you do not have the Pro API Access addon.
 * ```
 */
forums
  .command('listThreads')
  .description('Returns a list of posts within a forum.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-i, --include [array]', 'Defaults to ["approved"]. Choices: open, closed, killed.', ['open', 'closed'])
  .option('-l, --limit [number]', 'Maximum number of posts to return. Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: asc, desc. Defaults to "desc".', 'desc')
  .option('-q, --query [string]', 'Defaults to null.', null)
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: thread.', [])
  .option('-s, --since [string]', 'Unix timestamp (or ISO datetime standard).', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --thread [array]', 'Looks up a thread by ID. You may pass us the "ident" query type instead of an ID by including "forum". You may pass us the "link" query type to filter by URL. You must pass the "forum" if you do not have the Pro API Access addon.', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listThreads(options, container.get('util').printCliResult);
  });

/**
 * ### listUsers
 * Returns a list of users active within a forum.
 *
 * Output of `disqus forums listUsers --help`:
 * ```
 Usage: disqus forums listUsers [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [cursor]      Defaults to null,
 -f, --forum <string>       Looks up a forum by ID (aka short name).
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Maximum value of 100. Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Choices: desc. Defaults to "desc".
 -s, --since_id [string]    Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 * ```
 */
forums
  .command('listUsers')
  .description('Returns a list of users active within a forum.')
  .option('-c, --cursor [cursor]', 'Defaults to null,', null)
  .option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Choices: desc. Defaults to "desc".', 'desc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.listUsers(options, container.get('util').printCliResult);
  });

/**
 * ### removeModerator
 * Removes a moderator from a forum.
 *
 * Output of `disqus forums removeModerator --help`:
 * ```
 Usage: disqus forums removeModerator [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -m, --moderator <string>     Looks up a moderator by ID.
 -S, --api_secret <string>    Your application's api_secret.
 * ```
 */
forums
  .command('removeModerator')
  .description('Removes a moderator from a forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-m, --moderator <string>', 'Looks up a moderator by ID.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.removeModerator(options, container.get('util').printCliResult);
  });

/**
 * ### unfollow
 * Unfollow a forum.
 *
 * Output of `disqus forums unfollow --help`:
 * ```
 Usage: disqus forums unfollow [options]

 Options:

 -h, --help                   output usage information
 -A, --access_token <string>  Your access token.
 -H, --https [boolean]        Whether to use https. Defaults to true.
 -L, --logLevel [string]      Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>    Your application's api_secret.
 -t, --target <string>        Looks up a forum by ID (aka short name).
 * ```
 */
forums
  .command('unfollow')
  .description('Unfollow a forum.')
  .option('-A, --access_token <string>', 'Your access token.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a forum by ID (aka short name).')
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).forums.unfollow(options, container.get('util').printCliResult);
  });

module.exports = forums;
