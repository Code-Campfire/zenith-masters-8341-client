const base_url = `http://localhost:8000`
const getToken = () => localStorage.getItem('token')

export const fetchGetAllFriends = async () => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/accepted_relationships/`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	return data
}

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

export const fetchAllIncomingFriendRequests = async () => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/pending_relationships`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	const modifiedData = data.filter(rel => rel.direction === 'incoming')
	return modifiedData
}

export const fetchAllOutgoingFriendRequests = async () => {
	const token = getToken()
	const response = await fetch(`${base_url}/bookface/simps/pending_relationships`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
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
