import { fetchRefreshAccessToken } from './apiRefreshToken'

const base_url = `http://localhost:8000/`
const getToken = () => localStorage.getItem('token')

export const fetchApiPost = async (endpoint, body = null) => {
	console.log(body)
	try {
		const accessToken = getToken()
		console.log(base_url + endpoint)
		const response = await fetch(`${base_url}${endpoint}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
		if (response.ok) {
			const data = await response.json()
			return data
		} else if (response.status === 401) {
			const refreshResponse = await fetchRefreshAccessToken()
			if (refreshResponse.ok) {
				const updatedAccessToken = getToken()
				const retryResponse = await fetch(`${base_url}${endpoint}`, {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${updatedAccessToken}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body),
				})
				const data = await retryResponse.json()
				return data
			}
		} else {
			console.log(response, ' response that is not ok')
			throw new Error(`Response not ok and couldn't refresh`)
		}
	} catch (error) {
		console.error(error)
		throw error
	}
}

export const postUrls = {
	pendingRelationships: 'bookface/simps/pending_relationships/',
	users: 'bookface/users/',
	posts: 'bookface/posts/',
	friends: 'bookface/simps/accepted_relationships/',
	usersWithRelationships: 'bookface/users/AndRelationships/',
	userById: userId => `bookface/users/${userId}/`,
	likes: postId => `bookface/posts/${postId}/like/`,
	comments: postId => `bookface/posts/${postId}/comments/`,
	imageUpload: `bookface/imageUploads/`,
	assignProfilePic: `bookface/user-pictures/set-profile-pic/`,
	assignBackgroundPic: `bookface/user-pictures/set-background-pic/`,
	// profileImageUpload: `bookface/user-pictures/set-profile-pic/`,
}
