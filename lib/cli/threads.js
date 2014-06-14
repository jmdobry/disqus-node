/**
 * [Up one level](../index.html)
 * ### Category CLI
 * See also [Category API](../api/category.html)
 */
var commander = require('commander');
var category = new commander.Command('disqus category');

category
  .usage('<cmd> [options]');

/**
 * ### close
 * Closes a thread. See [disqus.com/api/docs/threads/close](http://disqus.com/api/docs/threads/close).
 *
 * Method not yet implemented.
 */
category
  .command('close')
  .description('Closes a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### create
 * Creates a new thread. See [disqus.com/api/docs/threads/create](http://disqus.com/api/docs/threads/create).
 *
 * Method not yet implemented.
 */
category
  .command('create')
  .description('Creates a new thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### details
 * Returns thread details. See [disqus.com/api/docs/threads/details](http://disqus.com/api/docs/threads/details).
 *
 * Method not yet implemented.
 */
category
  .command('details')
  .description('Returns thread details.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### list
 * Returns a list of threads sorted by the date created. See [disqus.com/api/docs/threads/list](http://disqus.com/api/docs/threads/list).
 *
 * Method not yet implemented.
 */
category
  .command('list')
  .description('Returns a list of threads sorted by the date created.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### listPopular
 * Returns a list of threads sorted by number of posts made since "interval".
 *
 * If you are using both "category" and "forum" parameters, the forum of the category must match that as the
 * parameter value for "forum".
 *
 * See [disqus.com/api/docs/threads/listPopular](http://disqus.com/api/docs/threads/listPopular).
 *
 * Method not yet implemented.
 */
category
  .command('listPopular')
  .description('Returns a list of threads sorted by number of posts made since "interval".')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### listPosts
 * Returns a list of posts within a thread. See [disqus.com/api/docs/threads/listPosts](http://disqus.com/api/docs/threads/listPosts).
 *
 * Method not yet implemented.
 */
category
  .command('listPosts')
  .description('Returns a list of posts within a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### open
 * Opens a thread. See [disqus.com/api/docs/threads/open](http://disqus.com/api/docs/threads/open).
 *
 * Method not yet implemented.
 */
category
  .command('open')
  .description('Opens a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### remove
 * Removes a thread. See [disqus.com/api/docs/threads/remove](http://disqus.com/api/docs/threads/remove).
 *
 * Method not yet implemented.
 */
category
  .command('remove')
  .description('Removes a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### restore
 * Opens a thread. See [disqus.com/api/docs/threads/restore](http://disqus.com/api/docs/threads/restore).
 *
 * Method not yet implemented.
 */
category
  .command('restore')
  .description('Opens a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### set
 * Returns an unsorted set of threads given a list of ids. See [disqus.com/api/docs/threads/set](http://disqus.com/api/docs/threads/set).
 *
 * Method not yet implemented.
 */
category
  .command('set')
  .description('Returns an unsorted set of threads given a list of ids.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### subscribe
 * Subscribe to a thread. See [disqus.com/api/docs/threads/subscribe](http://disqus.com/api/docs/threads/subscribe).
 *
 * Method not yet implemented.
 */
category
  .command('subscribe')
  .description('Subscribe to a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### unsubscribe
 * Un-subscribe to a thread. See [disqus.com/api/docs/threads/unsubscribe](http://disqus.com/api/docs/threads/unsubscribe).
 *
 * Method not yet implemented.
 */
category
  .command('unsubscribe')
  .description('Un-subscribe to a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### update
 * Updates information on a thread. See [disqus.com/api/docs/threads/update](http://disqus.com/api/docs/threads/update).
 *
 * Method not yet implemented.
 */
category
  .command('update')
  .description('Updates information on a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

/**
 * ### vote
 * Register a vote on a thread. See [disqus.com/api/docs/threads/vote](http://disqus.com/api/docs/threads/vote).
 *
 * Method not yet implemented.
 */
category
  .command('vote')
  .description('Register a vote on a thread.')
  .option('-A, --api_key <string>', 'Your applications\'s public api_key.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .action(function () {
    throw new Error('Not yet implemented!');
  });

module.exports = category;
