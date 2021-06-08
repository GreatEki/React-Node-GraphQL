import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import CreateUser from 'components/CreateUser';
import ListUsers from 'components/ListUsers';
import UpdatePassword from 'components/UpdatePassword';

function App() {
	const client = new ApolloClient({
		uri: 'http://localhost:5000/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<>
			<ApolloProvider client={client}>
				<div> The GraphQL Application</div>

				<CreateUser />
				<br />
				<ListUsers />

				<br />

				<UpdatePassword />
			</ApolloProvider>
		</>
	);
}

export default App;
