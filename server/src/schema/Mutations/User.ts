import { UserType } from '../TypeDef/User';
import { GraphQLString } from 'graphql';

export const CREATE_USER = {
	type: UserType,
	args: {
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
	resolve(parent: any, args: any) {
		const { name, username, password } = args;

		return {
			name,
			username,
			password,
		};
	},
};
