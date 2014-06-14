var Disqus = require('./');

var disqus = new Disqus({
  access_token: 'fc117e395e9f4ed8859ada28eac6850d',
  api_secret: 'wMljoyWuIczupvXE3TySZz0rAmTyeN7QQArxVJTKbG63uTXzbMnOO8dCx4cGDF3I',
  logLevel: 'debug'
});

disqus.blacklists.list({
  forum: 'pseudobry'
})
  .then(function (result) {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(console.log)
  .error(console.log);
