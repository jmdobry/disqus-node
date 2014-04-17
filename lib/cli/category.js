/**
 * [Up one level](../index.html)
 * ### Category CLI
 * See also [Category API](../api/category.html)
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
		}, function (err, threads) {
			if (err) {
				console.error(err);
				process.exit(1);
			} else {
				console.log(JSON.stringify(threads, null, 2));
			}
		});
	});

module.exports = category;
