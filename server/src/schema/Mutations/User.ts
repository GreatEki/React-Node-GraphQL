import { UserType } from '../TypeDef/User';
import { MessageType } from '../TypeDef/Message';

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

export const DELETE_USER = {
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

export const UPDATE_USER_INFO = {
	type: UserType,
	args: {
		id: { type: GraphQLID },
	},
	async resolve(parent: any, args: any) {},
};

export const CHANGE_PASSWORD = {
	type: MessageType,
	args: {
		id: { type: GraphQLID },
		oldPassword: { type: GraphQLString },
		newPassword: { type: GraphQLString },
	},

	async resolve(parent: any, args: any) {
		const { id, oldPassword, newPassword } = args;

		// Check if User exists in the db
		const user = await Users.findOne({ id });

		if (!user) {
			// throw new Error('No record found for this user');

			return {
				success: false,
				message: 'No record found for this user',
			};
		}

		if (user) {
			const existingPassword = user.password;

			if (oldPassword === existingPassword) {
				// Proceed to change users password
				await Users.update({ id: id }, { password: newPassword });

				return {
					success: true,
					message: 'Password updated',
				};
			} else {
				// throw new Error('Incorrect exisitng password');
				return {
					success: false,
					message: 'Incorrect exisitng password',
				};
			}
		}
	},
};
