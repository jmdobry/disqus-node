/**
 * [Up one level](/lib/index.html)
 * ### Category CLI
 * See the disqus-node [Category API](/lib/api/category.html).
 *
 * See the [Category API on Disqus.com](https://disqus.com/api/docs/categories/).
 */
var commander = require('commander');
var category = new commander.Command('disqus category');

category
	.usage('<cmd> [options]');

/**
 * ### create
 * Creates a new category.
 *
 * Output of `disqus category create --help`:
 * ```
 Usage: disqus category create [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -d, --default [boolean]  Defaults to false
 -f, --forum <string>     Looks up a forum by ID (aka short name). You must be a moderator on the selected forum.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -t, --title <string>     Maximum length of 50
 * ```
 */
category
	.command('create')
	.description('Creates a new category.')
	.option('-A, --api_key <string>', 'Your applications\'s public api_key.')
	.option('-d, --default [boolean]', 'Defaults to false', false)
	.option('-f, --forum <string>', 'Looks up a forum by ID (aka short name). You must be a moderator on the selected forum.')
	.option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
	.option('-t, --title <string>', 'Maximum length of 50')
	.action(function (options) {
		var Disqus = require('../');
		var disqus = new Disqus({
			logLevel: options.logLevel,
			api_key: options.api_key,
			https: options.https
		});

		disqus.category.create({
			default: options.default,
			forum: options.forum,
			title: options.title
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
 * ### details
 * Returns category details.
 *
 * Output of `disqus category details --help`:
 * ```
 Usage: disqus category details [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -c, --category <string>  Looks up a category by ID.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 * ```
 */
category
	.command('details')
	.description('Returns category details.')
	.option('-A, --api_key <string>', 'Your applications\'s public api_key.')
	.option('-c, --category <string>', 'Looks up a category by ID.')
	.option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
	.action(function (options) {
		var Disqus = require('../');
		var disqus = new Disqus({
			logLevel: options.logLevel,
			api_key: options.api_key,
			https: options.https
		});

		disqus.category.details({
			category: options.category
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
 * Returns a list of categories within a forum.
 *
 * Output of `disqus category list --help`:
 * ```
 Usage: disqus category list [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -c, --cursor [string]    Defaults to null.
 -f, --forum <string>     Looks up a forum by ID (aka short name).
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -l, --limit [number]     Defaults to 25.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]     Defaults to "asc". Choices: "asc", "desc".
 -s, --since_id [string]  Defaults to null.
 * ```
 */
category
	.command('list')
	.description('Returns a list of categories within a forum.')
	.option('-A, --api_key <string>', 'Your applications\'s public api_key.')
	.option('-c, --cursor [string]', 'Defaults to null.', null)
	.option('-f, --forum <string>', 'Looks up a forum by ID (aka short name).')
	.option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-l, --limit [number]', 'Defaults to 25.', 25)
	.option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
	.option('-o, --order [string]', 'Defaults to "asc". Choices: "asc", "desc".', 'asc')
	.option('-s, --since_id [string]', 'Defaults to null.', null)
	.action(function (options) {
		var Disqus = require('../');
		var disqus = new Disqus({
			logLevel: options.logLevel,
			api_key: options.api_key,
			https: options.https
		});

		disqus.category.list({
			forum: options.forum,
			since_id: options.since_id,
			cursor: options.cursor,
			limit: options.limit,
			order: options.order
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
 * ### listPosts
 * Returns a list of posts within a category.
 *
 * Output of `disqus category listPosts --help`:
 * ```
 Usage: disqus category listPosts [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -c, --cursor [string]    Defaults to null.
 -C, --category <string>  Looks up a category by ID.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -i, --include [array]    Defaults to ["approved"]. Choices: unapproved, approved, spam, deleted, flagged, highlighted.
 -l, --limit [number]     Defaults to 25.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]     Defaults to "asc". Choices: "asc", "desc".
 -q, --query [string]     Defaults to null.
 -r, --related [array]    Defaults to [].
 -s, --since [string]     Defaults to null.
 * ```
 */
category
	.command('listPosts')
	.description('Returns a list of posts within a category.')
	.option('-A, --api_key <string>', 'Your applications\'s public api_key.')
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
	.action(function (options) {
		var Disqus = require('../');
		var disqus = new Disqus({
			logLevel: options.logLevel,
			api_key: options.api_key,
			https: options.https
		});

		disqus.category.listPosts({
			category: options.category,
			since: options.since,
			related: options.related,
			cursor: options.cursor,
			limit: options.limit,
			query: options.query,
			include: options.include,
			order: options.order
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
 * ### listThreads
 * Returns a list of threads within a category sorted by the date created.
 *
 * Output of `disqus category listThreads --help`:
 * ```
 Usage: disqus category listThreads [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your applications's public api_key.
 -c, --cursor [string]    Defaults to null.
 -C, --category <string>  Looks up a category by ID.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -l, --limit [number]     Defaults to 25.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]     Defaults to "asc". Choices: "asc", "desc".
 -r, --related [array]    Defaults to [].
 -s, --since [string]     Defaults to null.
 * ```
 */
category
	.command('listThreads')
	.description('Returns a list of threads within a category sorted by the date created.')
	.option('-A, --api_key <string>', 'Your applications\'s public api_key.')
	.option('-c, --cursor [string]', 'Defaults to null.', null)
	.option('-C, --category <string>', 'Looks up a category by ID.')
	.option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-l, --limit [number]', 'Defaults to 25.', 25)
	.option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
	.option('-o, --order [string]', 'Defaults to "asc". Choices: "asc", "desc".', 'asc')
	.option('-r, --related [array]', 'Defaults to [].', [])
	.option('-s, --since [string]', 'Defaults to null.', null)
	.action(function (options) {
		var Disqus = require('../');
		var disqus = new Disqus({
			logLevel: options.logLevel,
			api_key: options.api_key,
			https: options.https
		});

		disqus.category.listThreads({
			category: options.category,
			since: options.since,
			related: options.related,
			cursor: options.cursor,
			limit: options.limit,
			order: options.order
		}, function (err, result) {
			if (err) {
				console.error(err);
				process.exit(1);
			} else {
				console.log(JSON.stringify(result, null, 2));
			}
		});
	});

module.exports = category;
