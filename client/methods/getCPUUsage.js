const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server CPU Usage of
 */
function getCPUUsage(ServerID) {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	return Req.getRequest('GetCPUUsage', ServerID);
}

module.exports = getCPUUsage;