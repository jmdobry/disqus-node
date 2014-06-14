/**
 * [Up one level](/lib/index.html)
 * ### Topics CLI
 * See the disqus-node [Topics API](/lib/api/topics.html).
 *
 * See the [Topics API on Disqus.com](https://disqus.com/api/docs/topics/).
 */
var commander = require('commander');
var topics = new commander.Command('disqus topics');

topics
  .usage('<cmd> [options]');

/**
 * ### follow
 * Follow a topic.
 *
 * Output of `disqus topics follow --help`:
 * ```
 Usage: disqus topics follow [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your application's public api_key.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -t, --target <string>    Looks up a topic by ID (slug).
 * ```
 */
topics
  .command('follow')
  .description('Follow a topic.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = require('../');
    var disqus = new Disqus({
      logLevel: options.logLevel,
      api_key: options.api_key,
      api_secret: options.api_secret,
      https: options.https
    });

    disqus.topics.follow({
      target: options.target
    }, function (err, result) {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  });

/**
 * ### listFollowers
 * Returns a list of users following a topic.
 *
 * Output of `disqus topics listFollowers --help`:
 * ```
 Usage: disqus topics listFollowers [options]

 Options:

 -h, --help               output usage information
 -A, --api_key <string>   Your application's public api_key.
 -c, --cursor [string]    Defaults to null.
 -H, --https [boolean]    Whether to use https. Defaults to true.
 -l, --limit [number]     Defaults to 25.
 -L, --logLevel [string]  Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]     Defaults to "asc". Choices: asc, desc.
 -s, --since_id [string]  Defaults to null.
 -t, --topic <string>     Looks up a topic by ID (slug).
 * ```
 */
topics
  .command('listFollowers')
  .description('Returns a list of users following a topic.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 25.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: asc, desc.', 'asc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-t, --topic <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = require('../');
    var disqus = new Disqus({
      logLevel: options.logLevel,
      api_key: options.api_key,
      https: options.https
    });

    disqus.topics.listFollowers({
      topic: options.topic,
      since_id: options.since_id,
      cursor: options.cursor,
      limit: options.limit,
      order: options.order
    }, function (err, result) {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  });

/**
 * ### unfollow
 * Unfollow a topic.
 *
 * Output of `disqus topics unfollow --help`:
 * ```
 Usage: disqus topics unfollow [options]

 Options:

 -h, --help                 output usage information
 -A, --api_key <string>     Your application's public api_key.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -S, --api_secret <string>  Your application's api_secret.
 -t, --target <string>      Looks up a topic by ID (slug).
 * ```
 */
topics
  .command('unfollow')
  .description('Unfollow a topic.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-S, --api_secret <string>', 'Your applications\'s api_secret.')
  .option('-t, --target <string>', 'Looks up a topic by ID (slug).')
  .action(function (options) {
    var Disqus = require('../');
    var disqus = new Disqus({
      logLevel: options.logLevel,
      api_key: options.api_key,
      api_secret: options.api_secret,
      https: options.https
    });

    disqus.topics.unfollow({
      target: options.target
    }, function (err, result) {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        console.log(JSON.stringify(result, null, 2));
      }
    });
  });

module.exports = topics;
