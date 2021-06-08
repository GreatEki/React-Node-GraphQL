import React from 'react';
import { GET_ALL_USERS } from '../GraphQL/Queries';
import { DELETE_USER } from '../GraphQL/Mutations';
import { useQuery, useMutation } from '@apollo/client';

import './component.css';

function ListUsers() {
	const { data } = useQuery(GET_ALL_USERS);

	const [deleteUser] = useMutation(DELETE_USER);

	const executeDeleteUser = async (id: number) => {
		const deleteResponse: any = await deleteUser({ variables: { id: id } });

		const { data } = deleteResponse;

		console.log(data);

		if (data.deleteUser.success) {
			alert(`${data.deleteUser.message}`);
		} else {
			alert(`${data.deleteUser.message}`);
		}
	};

	return (
		<div>
			<h3> List of Users Component</h3>

			{data ? (
				data.getAllUsers.map(
					(user: { id: number; username: string; name: string }) => (
						<div key={user.id}>
							<p>
								<span style={{ color: 'Blue' }}> Username: </span>{' '}
								{user.username} <span style={{ color: 'Green' }}> Name: </span>{' '}
								{user.name}{' '}
								<button
									className='deleteBtn'
									onClick={() => executeDeleteUser(user.id)}>
									{' '}
									Delete User{' '}
								</button>
							</p>
						</div>
					)
				)
			) : (
				<span>Data Unavailable</span>
			)}
		</div>
	);
}

export default ListUsers;
