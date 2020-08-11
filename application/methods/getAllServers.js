const req = require('../ApplicationRequest.js');

function getAllServers() {
	const Req = new req(process.env.APPLICATION_PTEROJS_HOST, process.env.APPLICATION_PTEROJS_KEY);
	return Req.getRequest('GetAllServers', null);
}

module.exports = getAllServers;