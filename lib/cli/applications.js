var commander = require('commander');
var applications = new commander.Command('disqus applications');

applications
	.usage('<cmd> [options]');

applications
	.command('listUsage')
	.description('Returns the API usage per day for this application.')
	.option('-a, --application [string]', 'Defaults to null.', null)
	.option('-d, --days [number]', 'Defaults to 30.', parseInt, 30)
	.action(function (options) {
		console.log('disqus applications listUsage', options);
	});

module.exports = applications;
