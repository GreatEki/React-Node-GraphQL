import React from 'react';
import { GET_ALL_USERS } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import userEvent from '@testing-library/user-event';

function ListUsers() {
	const { data, error } = useQuery(GET_ALL_USERS);

	if (data) {
		console.log(data);
	}
	return (
		<div>
			<span> List of Users Component</span>

			{data ? (
				data.getAllUsers.map((user: { username: string; name: string }) => (
					<div>
						<p>
							<span style={{ color: 'Blue' }}> Username: </span> {user.username}{' '}
							<span style={{ color: 'Green' }}> Name: </span> {user.name}{' '}
						</p>
					</div>
				))
			) : (
				<span>Data Unavailable</span>
			)}
		</div>
	);
}

export default ListUsers;
