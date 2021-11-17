const db = {}; // pretend db does expected things.. it's a black box

module.exports = function(req, res, next) {
	if (!req.sessionId) {
		return next(new Error('You must log in to access this endpoint.'));
	}

	const sessionId = req.sessionId;

	const userId = db.session.get(sessionId);
	const user = db.user.get(userId);

	if (!user) {
		return next(new Error('invalid session data. please log in.'));
	}

	next();
};

