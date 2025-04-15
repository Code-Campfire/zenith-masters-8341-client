const api = 'http://localhost:5000/auth/login'

export async function fetchUserLogin(user) {
	const response = await fetch(`${api}/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
	const data = await response.json()
	console.log(data, ' data')
	return data
}
