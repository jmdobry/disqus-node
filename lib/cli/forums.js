/**
 * [Up one level](../index.html)
 * ### Forums CLI
 * See also [Forums API](../api/forums.html)
 */
var commander = require('commander');
var forums = new commander.Command('disqus forums');

forums
	.usage('<cmd> [options] [args]');

module.exports = forums;
