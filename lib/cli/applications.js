/**
 * [Up one level](../index.html)
 * ### Applications CLI
 * See also [Applciations API](../api/applications.html)
 */
var commander = require('commander');
var applications = new commander.Command('disqus applications');

applications
	.usage('<cmd> [options]');

applications
	.command('listUsage')
	.description('Returns the API usage per day for this application.')
	.option('-a, --application [string]', 'Defaults to null.', null)
	.option('-d, --days [number]', 'Maximum value of 30. Defaults to 30.', parseInt, 30)
	.action(function (options) {
		console.log('disqus applications listUsage', options);
	});

module.exports = applications;
