const req = require('../ApplicationRequest.js');

/**
 * @param {String} UserID The user ID to delete
 */
function deleteUser(UserID) {
	const Req = new req(process.env.APPLICATION_PTEROBEST_HOST, process.env.APPLICATION_PTEROBEST_KEY);
	return Req.deleteRequest('DeleteUser', UserID);
}

module.exports = deleteUser;