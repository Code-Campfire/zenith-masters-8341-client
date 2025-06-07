const api = 'http://127.0.0.1:8000'

export const fetchLogin = async (username, password) => {
	const response = await fetch(`${api}/login/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ username, password }),
	})
	const data = await response.json()
	if (response.ok && data.tokens) {
		localStorage.setItem('token', data.tokens.access)
		localStorage.setItem('refresh', data.tokens.refresh)
		localStorage.setItem('user', JSON.stringify(data.user))
		return data
	} else {
		throw new Error(data.message || 'Error logging in')
	}
}

export const fetchRegister = async (email, username, password) => {
	const response = await fetch(`${api}/register/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, username, password }),
	})
	const data = await response.json()

	if (!response.ok) {
		throw data.errors
	}
}
