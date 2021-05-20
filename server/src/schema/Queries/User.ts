import { GraphQLList } from 'graphql';
import { UserType } from '../TypeDef/User';

export const GET_ALL_USERS = {
	type: new GraphQLList(UserType),
	resolve() {
		return [];
	},
};
