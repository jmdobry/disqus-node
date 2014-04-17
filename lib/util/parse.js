module.exports = function parse(res) {
	var json = JSON.parse(res[1]);
	if (!('code' in json) || (json.code !== '0' && json.code !== 0)) {
		throw new Error(json.response);
	}
	return json.response;
};
