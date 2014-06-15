var commander = require('commander');
var disqus = new commander.Command('disqus');
var pkg = require('../../package.json');

/**
 ```
 MBP:~ jason$ npm install -g disqus-node

 npm http GET https://registry.npmjs.org/disqus-node
 ...
 disqus-node@0.11.0 usr/local/lib/node_modules/disqus-node

 MBP:~ jason$ disqus -h

 Usage: disqus <cmd> <subCmd> [options]

 Commands:

 applications <cmd> [options] Execute command for the Applications resource.
 blacklists <cmd> [options] Execute command for the Blacklists resource.
 categories <cmd> [options] Execute command for the Categories resource.
 exports <cmd> [options] Execute command for the Exports resource.
 forums <cmd> [options] Execute command for the Forums resource.
 imports <cmd> [options] Execute command for the Imports resource.
 topics <cmd> [options] Execute command for the Topics resource.
 trends <cmd> [options] Execute command for the Trends resource.
 whitelists <cmd> [options] Execute command for the Whitelists resource.

 Options:

 -h, --help     output usage information
 -V, --version  output the version number

 MBP:~ jason$ disqus forums -h

 Usage: disqus forums <cmd> [options]

 Commands:

 addModerator [options]  Adds a moderator to a forum.
 create [options]       Creates a new forum.
 details [options]      Returns forum details.
 follow [options]       Follow a forum.
 installed [options]    Returns true if forum has one or more views.
 listCategories [options]  Returns a list of categories within a forum.
 listFollowers [options]   Returns a list of users following a forum.
 listModerators [options]  Returns a list of all moderators on a forum.
 listMostActiveUsers [options]  Returns a list of users active within a forum ordered by most comments made.
 listMostLikedUsers [options]   Returns a list of users active within a forum ordered by most likes received.
 listPosts [options]     Returns a list of posts within a forum.
 listThreads [options]   Returns a list of threads within a forum sorted by the date created.
 listUsers [options]     Returns a list of users active within a forum.
 removeModerator [options]      Removes a moderator from a forum.
 unfollow [options]      Unfollow a forum.

 Options:

 -h, --help  output usage information

 MBP:~ jason$ disqus forums listPosts -f pseudobry -S '1234abcd' -l 3

 {
   "cursor": {...},
   "code": 0,
   "response": [
     {...},
     {...},
     {...}
   ]
 }

 MBP:~ jason$
 * ```
 */
disqus
  .version(pkg.version)
  .usage('<cmd> <subCmd> [options]');

/**
 * ###### Applications
 * [API](/lib/api/applications.html) | [CLI](/lib/cli/applications.html) | [Disqus](https://disqus.com/api/docs/applications/)
 */
disqus
  .command('applications <cmd> [options]')
  .description('Execute command for the Applications resource.');
/**
 * ###### Blacklists
 * [API](/lib/api/blacklists.html) | [CLI](/lib/cli/blacklists.html) | [Disqus](https://disqus.com/api/docs/blacklists/)
 */
disqus
  .command('blacklists <cmd> [options]')
  .description('Execute command for the Blacklists resource.');
/**
 * ###### Categories
 * [API](/lib/api/categories.html) | [CLI](/lib/cli/categories.html) | [Disqus](https://disqus.com/api/docs/categories/)
 */
disqus
  .command('categories <cmd> [options]')
  .description('Execute command for the Categories resource.');
/**
 * ###### Exports
 * [API](/lib/api/exports.html) | [CLI](/lib/cli/exports.html) | [Disqus](https://disqus.com/api/docs/exports/)
 */
disqus
  .command('exports <cmd> [options]')
  .description('Execute command for the Exports resource.');
/**
 * ###### Forums
 * [API](/lib/api/forums.html) | [CLI](/lib/cli/forums.html) | [Disqus](https://disqus.com/api/docs/forums/)
 */
disqus
  .command('forums <cmd> [options]')
  .description('Execute command for the Forums resource.');
/**
 * ###### Imports
 * [API](/lib/api/imports.html) | [CLI](/lib/cli/imports.html) | [Disqus](https://disqus.com/api/docs/imports/)
 */
disqus
  .command('imports <cmd> [options]')
  .description('Execute command for the Imports resource.');
/**
 * ###### Topics
 * [API](/lib/api/topics.html) | [CLI](/lib/cli/topics.html) | [Disqus](https://disqus.com/api/docs/topics/)
 */
disqus
  .command('topics <cmd> [options]')
  .description('Execute command for the Topics resource.');
/**
 * ###### Trends
 * [API](/lib/api/trends.html) | [CLI](/lib/cli/trends.html) | [Disqus](https://disqus.com/api/docs/trends/)
 */
disqus
  .command('trends <cmd> [options]')
  .description('Execute command for the Trends resource.');
/**
 * ###### Whitelists
 * [API](/lib/api/whitelists.html) | [CLI](/lib/cli/whitelists.html) | [Disqus](https://disqus.com/api/docs/whitelists/)
 */
disqus
  .command('whitelists <cmd> [options]')
  .description('Execute command for the Whitelists resource.');

exports.parse = function (primaryArgs, secondaryArgs) {
  var primaryCommand = primaryArgs.length <= 2 ? '' : primaryArgs.pop();

  switch (primaryCommand) {
    case 'applications':
    case 'blacklists':
    case 'categories':
    case 'exports':
    case 'forums':
    case 'imports':
    case 'topics':
    case 'trends':
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
