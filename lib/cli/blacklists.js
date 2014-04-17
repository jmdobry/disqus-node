/**
 * [Up one level](../index.html)
 * ### Blacklists CLI
 * See also [Blacklists API](../api/blacklists.html)
 */
var commander = require('commander');
var blacklists = new commander.Command('disqus blacklists');
var Disqus = require('../');

blacklists
	.usage('<cmd> [options] [args]');

blacklists
	.command('add <forumId>')
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
		console.log('disqus blacklists add', forumId, options);
		var disqus = new Disqus({
			https: !!options.https
		});
		options.forumId = forumId;
		disqus.blacklists.add(options);
	});

blacklists
	.command('list <forumId>')
	.description('Returns a list of all blacklist entries.')
	.option('-c --cursor [cursor]', 'Defaults to null,', null)
	.option('-h --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-i --since_id [id]', 'Defaults to null.', null)
	.option('-l --limit [number]', 'Maximum value of 100. Defaults to 25.', parseInt, 25)
	.option('-o --order [string]', 'Choices: asc, desc. Defaults to "asc".', 'asc')
	.option('-q --query [query]', 'Choices: domain, word, ip, user, thread_slug, email. Defaults to null.', null)
	.option('-r --related [array]', 'You may specify relations to include with your response. Choices: forum.', [])
	.option('-s --since [number]', 'Unix timestamp (or ISO datetime standard)', null)
	.action(function (forumId, options) {
		console.log('disqus blacklists list', forumId, options);
		var disqus = new Disqus({
			https: !!options.https
		});
		options.forumId = forumId;
		disqus.blacklists.list(options);
	});

blacklists
	.command('remove <forumId>')
	.description('Removes an entry from the blacklist.')
	.option('-d --domain [array]', 'Domain Name. Defaults to [].', [])
	.option('-e --email [array]', 'Email address (defined by RFC 5322). Defaults to [].', [])
	.option('-h --https [boolean]', 'Whether to use https. Defaults to true.', true)
	.option('-i --ip [array]', 'IP address in CIDR notation. Defaults to [].', [])
	.option('-u --user [array]', 'Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].', [])
	.option('-w --word [array]', 'Maximum length of 200. Defaults to [].', [])
	.action(function (forumId, options) {
		console.log('disqus blacklists remove', forumId, options);
		var disqus = new Disqus({
			https: !!options.https
		});
		options.forumId = forumId;
		disqus.blacklists.remove(options);
	});

module.exports = blacklists;
