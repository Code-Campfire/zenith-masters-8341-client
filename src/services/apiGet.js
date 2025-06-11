import { fetchRefreshAccessToken } from './apiRefreshToken'

const base_url = `http://localhost:8000/`
const getToken = () => localStorage.getItem('token')

export const fetchApiGet = async endpoint => {
	try {
		const accessToken = getToken()

		const response = await fetch(`${base_url}${endpoint}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		})
		if (response.ok) {
			const data = await response.json()
			return data
		} else if (response.status === 401) {
			const refreshResponse = await fetchRefreshAccessToken()
			if (refreshResponse.ok) {
				const updatedAccessToken = getToken()
				const retryResponse = await fetch(`${base_url}${endpoint}`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${updatedAccessToken}`,
						'Content-Type': 'application/json',
					},
				})
				const data = await retryResponse.json()
				return data
			}
		} else {
			throw new Error(`Response not ok and couldn't refresh`)
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const getUrls = {
	pendingRelationships: 'bookface/simps/pending_relationships/',
	users: 'bookface/users/',
	friends: 'bookface/simps/accepted_relationships/',
	usersWithRelationships: 'bookface/users/AndRelationships/',
	userById: userId => `bookface/users/${userId}/`,
}
