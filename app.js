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
			c.referrer = user.id;
		}

		res.json(contacts);
	}
);

app.get(
	'contact/:id',
	authenticate,
	(req, res, next) => {
		const contactId = req.params.id;

		const contact = db.contact.get(contactId);

		delete contact.password;
		c.fullname = c.firstname + c.lastname;
		c.referrer = user.id;

		res.json(c);
	}
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
