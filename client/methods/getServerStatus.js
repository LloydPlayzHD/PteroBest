const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server status to get
 */
function getServerStatus(ServerID) {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	return Req.getRequest('GetServerStatus', ServerID);
}

module.exports = getServerStatus;