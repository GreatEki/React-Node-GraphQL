import { useState } from 'react';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const client = new ApolloClient({
		uri: 'http://localhost:5000/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<div> The GraphQL Application</div>

			<div className='createUser'>
				<div>
					<label> Name </label>
					<br />
					<input type='text' onChange={(e) => setName(e.currentTarget.value)} />
				</div>
				<div>
					<label> Username </label>
					<br />
					<input
						type='text'
						onChange={(e) => setUserName(e.currentTarget.value)}
					/>
				</div>
				<div>
					<label> Password </label>
					<br />
					<input
						type='text'
						onChange={(e) => setPassword(e.currentTarget.value)}
					/>
				</div>

				<button>Create User</button>
			</div>
		</ApolloProvider>
	);
}

export default App;
