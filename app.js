const express = require('express');
const app = express();
const port = 3000;

const authenticate = require('./authenticate');

const db = {}; // pretend db does expected things.. it's a black box

app.get(
	'/user-contacts',
	authenticate,
	(req, res, next) => {
		const user = req.user;

		const contacts = db.contacts.findBy('userId', user.id);

		for (const c in contacts) {
			delete c.password;
			c.fullname = c.firstname + c.lastname;
		}

		res.json(contacts);
	}
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
