const req = require('../ApplicationRequest.js');

/**
 * @param {String} InternalID Internal ID of the server to suspend
 */
function suspendServer(InternalID) {
	const Req = new req(process.env.APPLICATION_PTEROBEST_HOST, process.env.APPLICATION_PTEROBEST_KEY);
	return Req.postRequest('SuspendServer', null, InternalID);
}

module.exports = suspendServer;