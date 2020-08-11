const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to check owner value of
 */
function isOwner(ServerID) {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	return Req.getRequest('IsOwner', ServerID);
}

module.exports = isOwner;