import { fetchRefreshAccessToken } from './apiRefreshToken'

const base_url = `http://localhost:8000/`
const getToken = () => localStorage.getItem('token')

export const fetchApiPatch = async (endpoint, articleId, content) => {
	try {
		const accessToken = getToken()
		console.log(base_url + endpoint + articleId)
		const response = await fetch(`${base_url}${endpoint}${articleId}/`, {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ content }),
		})
		console.log(response)
		if (response.ok) {
			const data = await response.json()
			return data
		} else if (response.status === 401) {
			//If unauthorized response status, refresh token, then try the DELETE again
			const refreshResponse = await fetchRefreshAccessToken()
			if (refreshResponse.ok) {
				const updatedAccessToken = getToken()
				const retryResponse = await fetch(`${base_url}${endpoint}${articleId}/`, {
					method: 'PATCH',
					headers: {
						Authorization: `Bearer ${updatedAccessToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ content }),
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

export const patchUrls = {
	patchPost: 'bookface/posts/',
}
