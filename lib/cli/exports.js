/**
 * [Up one level](../index.html)
 * ### Exports CLI
 * See also [Exports API](../api/exports.html)
 */
var commander = require('commander');
var exports = new commander.Command('disqus exports');
var Disqus = require('../');

exports
	.usage('<cmd> [options] [args]');

exports
	.command('exportForum <forumId>')
	.description('Adds an entry to the blacklist.')
	.option('-d --domain [array]', 'Domain Name. Defaults to [].', [])
	.option('-e --email [array]', 'Email address (defined by RFC 5322). Defaults to [].', [])
	.option('-h --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-i --ip [array]', 'IP address in CIDR notation. Defaults to [].', [])
	.option('-n --notes [string]', 'Maximum length of 50. Defaults to "".', [])
	.option('-r --retroactive [boolean]', 'Defaults to false.', false)
	.option('-u --user [array]', 'Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].', [])
	.option('-w --word [array]', 'Maximum length of 200. Defaults to [].', [])
	.action(function (forumId, options) {
		console.log('disqus exports exportForum', forumId, options);
		var disqus = new Disqus({
			https: !!options.https
		});
		options.forumId = forumId;
		disqus.exports.exportForum(options);
	});

module.exports = exports;
