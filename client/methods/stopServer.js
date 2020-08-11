const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to stop
 */
function stopServer(ServerID) {
	const Req = new req(process.env.CLIENT_PTEROJS_HOST, process.env.CLIENT_PTEROJS_KEY);
	const data = { 'signal': 'stop' };
	return Req.postRequest('StopServer', data, ServerID);
}

module.exports = stopServer;