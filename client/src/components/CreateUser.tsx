import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../GraphQL/Mutations';

import './component.css';

const CreateUser = () => {
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const [createUser] = useMutation(CREATE_USER);

	const handleCreateUser = async () => {
		await createUser({
			variables: { name: name, username: userName, password: password },
		});

		setName('');
		setUserName('');
		setPassword('');
	};

	return (
		<div>
			<div className='createUser'>
				<div>
					<label> Name </label>
					<br />
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
					/>
				</div>
				<div>
					<label> Username </label>
					<br />
					<input
						type='text'
						value={userName}
						onChange={(e) => setUserName(e.currentTarget.value)}
					/>
				</div>
				<div>
					<label> Password </label>
					<br />
					<input
						type='text'
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
					/>
				</div>

				<button className='createBtn' onClick={handleCreateUser}>
					Create User
				</button>
			</div>
		</div>
	);
};

export default CreateUser;
