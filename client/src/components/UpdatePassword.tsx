import { useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from 'GraphQL/Mutations';
import { GET_ALL_USERS } from 'GraphQL/Queries';

const UpdatePassword = () => {
	const { data } = useQuery(GET_ALL_USERS);

	const [userID, setUserID] = useState<number>(0);
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const [changePassword] = useMutation(UPDATE_PASSWORD);

	const executeUpdatePassword = async () => {
		const updateResponse: any = await changePassword({
			variables: {
				id: userID,
				oldPassword: currentPassword,
				newPassword: newPassword,
			},
		});

		setUserID(0);
		setCurrentPassword('');
		setNewPassword('');

		const { data } = updateResponse;

		if (data.changePassword.success) {
			alert(`${data.changePassword.message}`);
		} else {
			alert(`${data.changePassword.message}`);
		}
	};

	return (
		<div>
			<h3> Update Password Component</h3>

			<select
				value={userID}
				onChange={(e) => setUserID(Number(e.target.value))}>
				<option value=''> Please select a user </option>
				{data ? (
					data.getAllUsers.map(
						(user: { id: number; username: string }, index: number) => (
							<option key={index} value={user.id}>
								{user.username}
							</option>
						)
					)
				) : (
					<option value=''>Data Unavailable</option>
				)}
			</select>
			<br />
			<br />
			<input
				type='password'
				placeholder='Current password'
				value={currentPassword}
				onChange={(e) => setCurrentPassword(e.currentTarget.value)}
			/>
			<br />

			<input
				type='password'
				placeholder='New Password'
				value={newPassword}
				onChange={(e) => setNewPassword(e.currentTarget.value)}
			/>

			<button className='editBtn' onClick={executeUpdatePassword}>
				Edit Password
			</button>
		</div>
	);
};

export default UpdatePassword;
