const req = require('../ApplicationRequest.js');

/**
 * @param {String} NodeID The node ID to get the details of.
 */
function getNode(NodeID) {
	const Req = new req(process.env.APPLICATION_PTEROBEST_HOST, process.env.APPLICATION_PTEROBEST_KEY);
	return Req.getRequest('GetNodeInfo', NodeID);
}

module.exports = getNode;