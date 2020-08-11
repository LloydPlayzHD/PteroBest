const req = require('../ApplicationRequest.js');

/**
 *
 * @param {String} InternalID Internal ID of the server to delete
 */
function deleteServer(InternalID) {
	const Req = new req(process.env.APPLICATION_PTEROJS_HOST, process.env.APPLICATION_PTEROJS_KEY);
	return Req.deleteRequest('DeleteServer', InternalID);
}

module.exports = deleteServer;