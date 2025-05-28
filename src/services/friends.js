const base_url = `http://localhost:8000`
const getToken = () => localStorage.getItem('token')

export const fetchSendFriendRequest = async friendId => {
	const token = getToken()
	console.log(token)
	const response = await fetch(`${base_url}/bookface/simps/with-user/${friendId}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ action: 'request', message: "Let's be friends" }),
	})
	const data = await response.json()
	console.log(data)
	return data
}
export const fetchWithdrawFriendRequest = async friendId => {
	const token = getToken()
	console.log(token)
	const response = await fetch(`${base_url}/bookface/simps/with-user/${friendId}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ action: 'withdraw', message: 'Changed my mind' }),
	})
	const data = await response.json()
	console.log(data)
	return data
}

export const fetchPendingFriendRequests = async () => {
	const token = getToken()
	console.log(token)
	const response = await fetch(`${base_url}/bookface/simps/active_relationships/`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	console.log(data)
	return data
}
