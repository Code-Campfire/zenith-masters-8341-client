const api = 'http://localhost:5000/user'

export async function fetchUser() {
	const token = localStorage.getItem('token')
	console.log(token, ' token')
	const response = await fetch(`${api}/`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	console.log(response)
	if (!response.ok) {
		console.error(`ERROR`)
		return
	}
	const data = await response.json()
	console.log(data)
	return data
}
