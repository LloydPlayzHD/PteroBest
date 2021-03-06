const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to start
 */
function startServer(ServerID) {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	const data = { 'signal': 'start' };
	return Req.postRequest('StartServer', data, ServerID);
}

module.exports = startServer;