// Update with your config settings.
import '../../lib/env';

const knexfile = {
	development: {
		client: 'pg',
		connection: process.env.TEST_DATABASE_URL,
		migrations: {
			directory: __dirname + '/migrations',
		},
		seed: {
			directory: __dirname + '/seeds',
		},
	},

	production: {
		client: 'pg',
		connection: process.env.PROD_DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
		// connection: {
		// 	host: process.env.DB_HOST,
		// 	database: process.env.DB_NAME,
		// 	user: process.env.DB_USER,
		// 	password: process.env.DB_PASS,
		// },
		migrations: {
			directory: __dirname + '/migrations',
		},
		seed: {
			directory: __dirname + '/seeds',
		},
	},
};

export default knexfile;
