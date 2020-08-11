const req = require('../ClientRequest.js');

/**
 * @param {String} ServerID ID of the server Disk Usage of
 */
function getDiskUsage(ServerID) {
	const Req = new req(process.env.CLIENT_PTEROJS_HOST, process.env.CLIENT_PTEROJS_KEY);
	return Req.getRequest('GetDiskUsage', ServerID);
}

module.exports = getDiskUsage;