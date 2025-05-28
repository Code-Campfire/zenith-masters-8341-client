const base_url = `http://localhost:8000`
const getToken = () => localStorage.getItem('token')

export const fetchGetAllUsers = async () => {
	const token = getToken()
	console.log(token)
	const response = await fetch(`${base_url}/bookface/users`, {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` },
	})
	const data = await response.json()
	console.log(data)
	return data
}
