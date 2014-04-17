var commander = require('commander');
var disqus = new commander.Command('disqus');
var pkg = require('../../package.json');

disqus
	.version(pkg.version);
/**
 * ###### Applications
 * [API](api/applications.html) | [CLI](cli/applications.html)
 */
disqus
	.command('applications <cmd> [options]')
	.description('Execute command for the Applications resource.');
/**
 * ###### Blacklists
 * [API](api/blacklists.html) | [CLI](cli/blacklists.html)
 */
disqus
	.command('blacklists <cmd> [options]')
	.description('Execute command for the Blacklists resource.');
/**
 * ###### Category
 * [API](api/category.html) | [CLI](cli/category.html)
 */
disqus
	.command('category <cmd> [options]')
	.description('Execute command for the Category resource.');
/**
 * ###### Exports
 * [API](api/exports.html) | [CLI](cli/exports.html)
 */
disqus
	.command('exports <cmd> [options]')
	.description('Execute command for the Exports resource.');
/**
 * ###### Forums
 * [API](api/forums.html) | [CLI](cli/forums.html)
 */
disqus
	.command('forums <cmd> [options]')
	.description('Execute command for the Forums resource.');
/**
 * ###### Trends
 * [API](api/trends.html) | [CLI](cli/trends.html)
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
