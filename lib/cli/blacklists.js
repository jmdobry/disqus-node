var commander = require('commander');
var blacklists = new commander.Command('disqus blacklists');

blacklists
	.usage('<cmd> [options] [args]');

blacklists
	.command('add <forumId>')
	.description('Adds an entry to the blacklist.')
	.option('-d --domain [array]', 'Domain Name. Defaults to [].', [])
	.option('-e --email [array]', 'Email address (defined by RFC 5322). Defaults to [].', [])
	.option('-i --ip [array]', 'IP address in CIDR notation. Defaults to [].', [])
	.option('-n --notes [string]', 'Maximum length of 50. Defaults to "".', [])
	.option('-r --retroactive [boolean]', 'Defaults to false.', false)
	.option('-u --user [array]', 'Looks up a user by ID. You may look up a user by username using the "username" query type. Defaults to [].', [])
	.option('-w --word [array]', 'Maximum length of 200. Defaults to [].', [])
	.action(function (options) {
		console.log('disqus blacklists add', options);
	});

blacklists
	.command('list <forumId>')
	.description('Returns a list of all blacklist entries.')
	.action(function (options) {
		console.log('disqus blacklists list', options);
	});

blacklists
	.command('remove [options]')
	.action(function (options) {
		console.log('disqus blacklists remove', options);
	});

module.exports = blacklists;
