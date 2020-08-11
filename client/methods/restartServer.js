const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to restart
 */
function restartServer(ServerID) {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	const data = { 'signal': 'restart' };
	return Req.postRequest('RestartServer', data, ServerID);
}

module.exports = restartServer;