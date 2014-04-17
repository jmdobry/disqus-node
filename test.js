var Disqus = require('./lib');

var disqus = new Disqus({
	https: true,
	logLevel: 'debug',
	api_key: 'IfpbvNk1xFLfNnNvdcWg0nrcYpuCIayQcPchc9emFCXaRWFLLQi9AEadNfKMh6Jd',
	api_secret: 'wMljoyWuIczupvXE3TySZz0rAmTyeN7QQArxVJTKbG63uTXzbMnOO8dCx4cGDF3I'
});

disqus.trends.listThreads({
	limit: 1
})
	.then(function (res) {
		console.log(res);
	})
	.catch(function (err) {
		console.log('CATCH');
		console.error(err);
		process.exit(1);
	})
	.error(function (err) {
		console.log('ERROR');
		console.log(err);
		process.exit(1);
	});
