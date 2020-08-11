const req = require('../ApplicationRequest.js');

function getUserInfo(UserID) {
	const Req = new req(process.env.APPLICATION_PTEROJS_HOST, process.env.APPLICATION_PTEROJS_KEY);
	return Req.getRequest('GetUserInfo', UserID);
}

module.exports = getUserInfo;