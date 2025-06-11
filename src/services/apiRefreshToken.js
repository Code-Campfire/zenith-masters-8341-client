const base_url = `http://localhost:8000`
const getRefreshToken = () => localStorage.getItem('refresh')

export const fetchRefreshAccessToken = async () => {
	try {
		const refreshToken = getRefreshToken()
		const refreshResponse = await fetch(`${base_url}/api/token/refresh/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ refresh: refreshToken }),
		})
		if (refreshResponse.ok) {
			const refreshData = await refreshResponse.json()
			localStorage.setItem('refresh', refreshData.refresh)
			localStorage.setItem('token', refreshData.access)
			console.log(refreshResponse, ' refresh response')
			console.log(refreshData, ' refresh data')
			return refreshResponse
		} else {
			throw new Error(`Could not refresh token`)
		}
	} catch (error) {
		console.error(`Error refreshing token: `, error)
		throw error
	}
}
