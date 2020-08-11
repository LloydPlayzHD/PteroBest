const req = require('../ClientRequest.js');

/**
 * @yields A Array of servers a application key has access to
 */
function getAllServers() {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	return Req.getRequest('GetAllServers', null);
}


module.exports = getAllServers;