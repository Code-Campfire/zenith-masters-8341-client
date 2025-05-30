const getToken = () => localStorage.getItem('token')

export const fetchGetWrapper = async (api, endpoint) => {
	const token = getToken()
	const response = await fetch(`${api}/${endpoint}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	const data = await response.json()
	return data
}

export const fetchPostWrapper = async (api, endpoint, payload) => {
	const token = getToken()
	const response = await fetch(`${api}/${endpoint}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(payload),
	})
	const data = await response.json()
	return data
}
