const req = require('../ApplicationRequest.js');

function getAllNodes() {
	const Req = new req(process.env.APPLICATION_PTEROJS_HOST, process.env.APPLICATION_PTEROJS_KEY);
	return Req.getRequest('GetAllNodes', null);
}

module.exports = getAllNodes;