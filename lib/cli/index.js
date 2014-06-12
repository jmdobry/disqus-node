var commander = require('commander');
var disqus = new commander.Command('disqus');
var pkg = require('../../package.json');

disqus
	.version(pkg.version);
/**
 * ###### Applications
 * [API](/lib/api/applications.html) | [CLI](/lib/cli/applications.html)
 */
disqus
	.command('applications <cmd> [options]')
	.description('Execute command for the Applications resource.');
/**
 * ###### Blacklists
 * [API](/lib/api/blacklists.html) | [CLI](/lib/cli/blacklists.html)
 */
disqus
	.command('blacklists <cmd> [options]')
	.description('Execute command for the Blacklists resource.');
/**
 * ###### Category
 * [API](/lib/api/category.html) | [CLI](/lib/cli/category.html)
 */
disqus
	.command('category <cmd> [options]')
	.description('Execute command for the Category resource.');
/**
 * ###### Exports
 * [API](/lib/api/exports.html) | [CLI](/lib/cli/exports.html)
 */
disqus
	.command('exports <cmd> [options]')
	.description('Execute command for the Exports resource.');
/**
 * ###### Forums
 * [API](/lib/api/forums.html) | [CLI](/lib/cli/forums.html)
 */
disqus
	.command('forums <cmd> [options]')
	.description('Execute command for the Forums resource.');
/**
 * ###### Imports
 * [API](/lib/api/imports.html) | [CLI](/lib/cli/imports.html) | [Disqus](https://disqus.com/api/docs/imports/)
 */
disqus
	.command('imports <cmd> [options]')
	.description('Execute command for the Imports resource.');
/**
 * ###### Topics
 * [API](/lib/api/topics.html) | [CLI](/lib/cli/topics.html) | [Disqus](https://disqus.com/api/docs/topics/)
 */
disqus
	.command('topics <cmd> [options]')
	.description('Execute command for the Topics resource.');
/**
 * ###### Trends
 * [API](/lib/api/trends.html) | [CLI](/lib/cli/trends.html)
 */
disqus
	.command('trends <cmd> [options]')
	.description('Execute command for the Trends resource.');

exports.parse = function (primaryArgs, secondaryArgs) {
	var primaryCommand = primaryArgs.length <= 2 ? '' : primaryArgs.pop();

	switch (primaryCommand) {
		case 'applications':
		case 'blacklists':
		case 'category':
		case 'exports':
		case 'forums':
		case 'imports':
		case 'topics':
		case 'trends':
			if (!secondaryArgs.length) {
				primaryArgs.push('--help');
				require('./' + primaryCommand).parse(primaryArgs);
			} else {
				secondaryArgs.splice(0, 0, primaryArgs[0], primaryArgs[1]);
				require('./' + primaryCommand).parse(secondaryArgs);
			}
			break;
		default:
			primaryArgs.push('--help');
			disqus.parse(primaryArgs);
	}
};
