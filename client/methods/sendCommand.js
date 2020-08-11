const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server to send a command to
 * @param {String} Command Command to send
 */
function sendCommand(ServerID, Command) {
	const Req = new req(process.env.CLIENT_PTEROJS_HOST, process.env.CLIENT_PTEROJS_KEY);
	const data = { 'command': Command };
	return Req.postRequest('SendCommand', data, ServerID);
}

module.exports = sendCommand;