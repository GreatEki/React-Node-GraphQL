import { UserType } from '../TypeDef/User';
import { GraphQLString, GraphQLID } from 'graphql';
import { Users } from '../../Entities/Users';
import { resolve } from 'path/posix';

export const CREATE_USER = {
	type: UserType,
	args: {
		name: { type: GraphQLString },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
	async resolve(parent: any, args: any) {
		const { name, username, password } = args;
		await Users.insert({ name, username, password });
		return {
			name,
			username,
			password,
		};
	},
};

const DELETE_USER = {
	type: UserType,
	args: {
		id: { type: GraphQLID },
	},
	async resolve(parent: any, args: any) {
		const { id } = args;

		await Users.delete({ id });

		return {
			message: 'The user was deleted successfully',
		};
	},
};
