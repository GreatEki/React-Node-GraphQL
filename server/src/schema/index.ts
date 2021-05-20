import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GET_ALL_USERS } from './Queries/User';
import { CREATE_USER, DELETE_USER, CHANGE_PASSWORD } from './Mutations/User';

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		getAllUsers: GET_ALL_USERS,
	},
});

const RootMutation = new GraphQLObjectType({
	name: 'RootMutation',
	fields: {
		createUser: CREATE_USER,
		deleteUser: DELETE_USER,
		changePassword: CHANGE_PASSWORD,
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});
