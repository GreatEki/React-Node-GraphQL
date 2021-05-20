import express from 'express';

import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { schema } from './schema/index';
import { Users } from './Entities/Users';

const main = async () => {
	// Create Connection to Database
	await createConnection({
		type: 'mysql',
		database: 'graphqlcrud',
		username: 'root',
		password: '',
		logging: true,
		synchronize: false,
		entities: [Users],
	});

	//  Initialise express application
	const app = express();

	app.use(cors());

	//
	app.use(express.json());

	// Configure GraphQL middleware
	app.use(
		'/graphql',
		graphqlHTTP({
			schema,
			graphiql: true,
		})
	);

	const PORT = process.env.PORT || 5000;

	app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT: ${PORT}`));
};

main().catch((err) => console.log(err));
