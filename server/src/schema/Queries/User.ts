import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDef/User';
import { Users } from '../../Entities/Users';

interface IUser {
	id: number;
	name: string;
	username: string;
	password: string;
}

export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	resolve(): Promise<IUser[]> {
		return Users.find();
	},
};
