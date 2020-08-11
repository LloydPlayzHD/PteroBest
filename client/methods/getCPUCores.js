const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server cores of
 */
function getCPUCores(ServerID) {
	const Req = new req(process.env.CLIENT_PteroBest_HOST, process.env.CLIENT_PteroBest_KEY);
	return Req.getRequest('GetCPUCores', ServerID);
}

module.exports = getCPUCores;