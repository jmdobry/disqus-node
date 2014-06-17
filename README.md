disqus-node
===========

[Disqus](https://disqus.com/api/docs/) API bindings and CLI for NodeJS. [disqus-node documentation](http://disqus-node.pseudobry.com/).

Copyright © 2014 Jason Dobry

## Status
[![NPM](https://nodei.co/npm/disqus-node.png?downloads=true&stars=true)](https://nodei.co/npm/disqus-node/)

[![Build Status](https://travis-ci.org/jmdobry/disqus-node.svg?branch=master)](https://travis-ci.org/jmdobry/disqus-node)

[![Coverage Status](https://coveralls.io/repos/jmdobry/disqus-node/badge.png)](https://coveralls.io/r/jmdobry/disqus-node)

[![Code Climate](https://codeclimate.com/github/jmdobry/disqus-node.png)](https://codeclimate.com/github/jmdobry/disqus-node)

[![Dependency Status](https://gemnasium.com/jmdobry/disqus-node.svg)](https://gemnasium.com/jmdobry/disqus-node)

## Documentation

__[Disqus v3.0 API Documentation](https://disqus.com/api/docs/)__

<br/>
#### API Client Library
__[API Client Library Documentation](http://disqus-node.pseudobry.com/lib/index.html)__

```js
var Disqus = require('disqus-node');

var disqus = new Disqus({
  // required
  api_secret: 'abcdefgh',
  // required when authentication is required
  access_token: '12345678',
  // defaults shown
  logLevel: 'info',
  https: true
});

// promise-style
disqus.forums.listPosts({
  forum: 'pseudobry',
  limit: 3
}).then(function (response) {
  response; // {
                 "cursor": {...},
                 "code": 0,
                 "response": [
                   {...},
                   {...},
                   {...}
                 ]
               }
});

// node-style
disqus.forums.listPosts({
  forum: 'pseudobry',
  limit: 3
}, function (err, response) {
  response; // {
                 "cursor": {...},
                 "code": 0,
                 "response": [
                   {...},
                   {...},
                   {...}
                 ]
               }
});
```

<br/>
#### Command-line Interface
__[CLI Documentation](http://disqus-node.pseudobry.com/lib/cli/index.html)__

```
$ npm install -g disqus-node
```

CLI available as `disqus`. `disqus` has a number of available resources:

```
$ disqus -h

Usage: disqus <cmd> <subCmd> [options]

Commands:

applications <cmd> [options] Execute command for the Applications resource.
blacklists <cmd> [options] Execute command for the Blacklists resource.
categories <cmd> [options] Execute command for the Categories resource.
exports <cmd> [options] Execute command for the Exports resource.
forums <cmd> [options] Execute command for the Forums resource.
imports <cmd> [options] Execute command for the Imports resource.
posts <cmd> [options] Execute command for the Posts resource.
topics <cmd> [options] Execute command for the Topics resource.
trends <cmd> [options] Execute command for the Trends resource.
whitelists <cmd> [options] Execute command for the Whitelists resource.

Options:

-h, --help     output usage information
-V, --version  output the version number
```

Each resource has available commands:

```
$ disqus forums -h

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
```
<br/>

```
$ disqus forums listPosts -f pseudobry -S '1234abcd' -l 3

{
  "cursor": {...},
  "code": 0,
  "response": [
    {...},
    {...},
    {...}
  ]
}
```

<br/>
## Functional
- Applications
- Blacklists
- Categories
- Exports
- Forums
- Imports
- Posts
- Topics
- Trends
- Whitelists

<br/>
## Not Yet Implemented
- Threads
- Users

<br/>
## License
[Apache License Version 2.0](https://github.com/jmdobry/disqus-node/blob/master/LICENSE)
