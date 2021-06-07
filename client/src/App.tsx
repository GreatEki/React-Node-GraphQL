import React from 'react';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
	const client = new ApolloClient({
		uri: 'http://localhost:5000/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<div> The GraphQL Application</div>
		</ApolloProvider>
	);
}

export default App;
