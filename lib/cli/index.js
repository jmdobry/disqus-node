var commander = require('commander');
var disqus = new commander.Command('disqus');
var pkg = require('../../package.json');

disqus
  .version(pkg.version);
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

exports.parse = function (primaryArgs, secondaryArgs) {
  var primaryCommand = primaryArgs.length <= 2 ? '' : primaryArgs.pop();

  switch (primaryCommand) {
    case 'applications':
    case 'blacklists':
    case 'categories':
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
