const mockServer = {}; // assume this does what you'd expect
const dummyLoginOptions = {}; // these options will log in a test user

const authenticate = require('./authenticate');

Describe('endpoints that return a user\'s contacts', () => {
	Describe('/user-contacts', () => {
		It('should throw an error if request is not authenticated', () => {
			const options = {
				url: '/user-contacts',
				method: 'get',
				headers: {},
				body: {},
			};

			const response = mockServer(options);

			Expect(response.status).To(Equal(400));
		});
	});

	Describe('/user-contacts', () => {
		It('should succeed with the correct values', () => {
			const response = mockServer(dummyLoginOptions);
			Expect(response.status).To(Equal(200));
			Expect(response.body).To(HaveKey('UserId', '7'));
		});
	});
});

Describe('authenticate middleware', () => {
	It('should fail if no session exists', () => {
		authenticate({}, {}, error => {
			Expect(error).To(Not(BeNil));
		});
	});
});

