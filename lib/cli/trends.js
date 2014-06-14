/**
 * [Up one level](../index.html)
 * ### Trends CLI
 * See also [Trends API](../api/trends.html)
 */
var commander = require('commander');
var trends = new commander.Command('disqus trends');

trends
  .usage('<cmd> [options]');

trends
  .command('listThreads')
  .description('Returns a list of trending threads.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-f, --forum [array]', 'Looks up a forum by ID (aka short name). Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Maximum value of 10. Defaults to 10.', parseInt, 10)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-r, --related [array]', 'You may specify relations to include with your response. Choices: forum, author, category. Defaults to [].', [])
  .action(function (options) {
    var Disqus = require('../');
    var disqus = new Disqus({
      logLevel: options.logLevel,
      api_key: options.api_key,
      https: options.https
    });
    disqus.trends.listThreads({
      limit: options.limit,
      forum: options.forum,
      related: options.related
    })
      .then(function (threads) {
        console.log(JSON.stringify(threads, null, 2));
      })
      .catch(function (err) {
        console.error(err);
        process.exit(1);
      })
      .error(function (err) {
        console.error(err);
        process.exit(1);
      });
  });

module.exports = trends;
