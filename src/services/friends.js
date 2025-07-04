//These, and where they are invoked, need to be converted to use the new API endpoint wrappers
const base_url = `http://localhost:8000`
const getToken = () => localStorage.getItem('token')

export const fetchRemoveFriend = async friendId => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/with-user/${friendId}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ action: 'unfriend', message: `I'm done with you!` }),
	})
	const data = await response.json()
	return data
}
export const fetchAcceptFriendRequest = async friendId => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/with-user/${friendId}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ action: 'accept', message: 'You choo- choo- choose me?!?' }),
	})
	const data = await response.json()
	return data
}

export const fetchSendFriendRequest = async friendId => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/with-user/${friendId}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ action: 'request', message: "Let's be friends" }),
	})
	const data = await response.json()
	return data
}
export const fetchWithdrawFriendRequest = async friendId => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/with-user/${friendId}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ action: 'withdraw', message: 'Changed my mind' }),
	})
	const data = await response.json()
	return data
}
