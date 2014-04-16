var commander = require('commander');
var disqus = new commander.Command('disqus');
var pkg = require('../../package.json');

disqus
	.version(pkg.version);

disqus
	.command('applications <cmd> [options]')
	.description('Execute command for the Applications resource.');

disqus
	.command('blacklists <cmd> [options]')
	.description('Execute command for the Blacklists resource.');

disqus
	.command('category <cmd> [options]')
	.description('Execute command for the Category resource.');

disqus
	.command('exports <cmd> [options]')
	.description('Execute command for the Exports resource.');

disqus
	.command('feeds <cmd> [options]')
	.description('Execute command for the Feeds resource.');

disqus
	.command('forums <cmd> [options]')
	.description('Execute command for the Forums resource.');

disqus
	.command('imports <cmd> [options]')
	.description('Execute command for the Imports resource.');

disqus
	.command('media <cmd> [options]')
		.description('Execute command for the Media resource.');

disqus
	.command('posts <cmd> [options]')
	.description('Execute command for the Posts resource.');

disqus
	.command('threads <cmd> [options]')
	.description('Execute command for the Threads resource.');

disqus
	.command('topics <cmd> [options]')
	.description('Execute command for the Topics resource.');

disqus
	.command('trends <cmd> [options]')
	.description('Execute command for the Trends resource.');

disqus
	.command('users <cmd> [options]')
	.description('Execute command for the Users resource.');

disqus
	.command('whitelists <cmd> [options]')
	.description('Execute command for the Whitelists resource.');

exports.parse = function (primaryArgs, secondaryArgs) {
	var primaryCommand = primaryArgs.length <= 2 ? '' : primaryArgs.pop();

	switch (primaryCommand) {
		case 'applications':
		case 'blacklists':
		case 'category':
		case 'exports':
		case 'feeds':
		case 'forums':
		case 'imports':
		case 'media':
		case 'posts':
		case 'threads':
		case 'topics':
		case 'trends':
		case 'users':
		case 'whitelists':
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
