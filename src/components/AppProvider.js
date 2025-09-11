import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { useLocation } from 'react-router-dom'
import { fetchApiGet, getUrls } from '../services/apiGet'

export const AppProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(null)
	const [loading, setLoading] = useState(false)
	const [profilePicture, setProfilePicture] = useState(null)
	const [backgroundPicture, setBackgroundPicture] = useState(null)
	const location = useLocation()

	const validateUser = async () => {
		const token = localStorage.getItem('token')
		if (!token) {
			setLoggedInUser(null)
			setLoading(false)
			localStorage.removeItem('user')
			return
		}
		try {
			const getUser = () => {
				return JSON.parse(localStorage.getItem('user')) || loggedInUser
			}
			const userToValidate = getUser()
			const user = await fetchApiGet(getUrls.userById(userToValidate.id))
			if (user) {
				setLoggedInUser(user)
				if (!profilePicture) {
					const storedProfilePicture = localStorage.getItem('profile-picture')
					setProfilePicture(storedProfilePicture)
					console.log(storedProfilePicture)
				}
				if (!backgroundPicture) {
					const storedBackgroundPicture = localStorage.getItem('background-picture')
					console.log(storedBackgroundPicture)
					setBackgroundPicture(storedBackgroundPicture)
				}
			} else {
				localStorage.removeItem('token')
				localStorage.removeItem('refresh')
				localStorage.removeItem('user')
				setLoggedInUser(null)
			}
		} catch (error) {
			console.error(`Error fetching user: `, error)
			localStorage.removeItem('token')
			localStorage.removeItem('refresh')
			localStorage.removeItem('user')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		validateUser()
	}, [location.pathname])

	useEffect(() => {
		console.log(loggedInUser, ' loggedInUser')
		if (loggedInUser) {
			if (!profilePicture) {
				const storedProfilePicture = localStorage.getItem('profile-picture')
				setProfilePicture(storedProfilePicture)
				console.log(storedProfilePicture)
			}
			console.log(backgroundPicture)
			if (!backgroundPicture) {
				const storedBackgroundPicture = localStorage.getItem('background-picture')
				console.log(storedBackgroundPicture)
				setBackgroundPicture(storedBackgroundPicture)
			}
		}
	}, [])

	return <AppContext.Provider value={{ profilePicture, setProfilePicture, backgroundPicture, setBackgroundPicture, loggedInUser, setLoggedInUser, loading, setLoading }}>{children}</AppContext.Provider>
}
