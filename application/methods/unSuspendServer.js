const req = require('../ApplicationRequest.js');

/**
 * @param {String} InternalID Internal ID of the server to unsuspend
 */
function unSuspendServer(InternalID) {
	const Req = new req(process.env.APPLICATION_PTEROJS_HOST, process.env.APPLICATION_PTEROJS_KEY);
	return Req.postRequest('UnSuspendServer', null, InternalID);
}

module.exports = unSuspendServer;