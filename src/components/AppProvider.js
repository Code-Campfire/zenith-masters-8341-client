import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { useLocation } from 'react-router-dom'
import { fetchApiGet, getUrls } from '../services/fetchApiGet'

export const AppProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(null)
	const [loading, setLoading] = useState(false)
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

	return <AppContext.Provider value={{ loggedInUser, setLoggedInUser, loading, setLoading }}>{children}</AppContext.Provider>
}
