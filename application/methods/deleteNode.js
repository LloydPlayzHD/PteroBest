const req = require('../ApplicationRequest.js');

/**
 *
 * @param {String} NodeID The node ID to delete
 */
function deleteNode(NodeID) {
	const Req = new req(process.env.APPLICATION_PTEROJS_HOST, process.env.APPLICATION_PTEROJS_KEY);
	return Req.deleteRequest('DeleteNode', NodeID);
}

module.exports = deleteNode;