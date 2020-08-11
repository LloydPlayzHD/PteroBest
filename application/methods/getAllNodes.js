const req = require('../ApplicationRequest.js');

function getAllNodes() {
	const Req = new req(process.env.APPLICATION_PTEROBEST_HOST, process.env.APPLICATION_PTEROBEST_KEY);
	return Req.getRequest('GetAllNodes', null);
}

module.exports = getAllNodes;