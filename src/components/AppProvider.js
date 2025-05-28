import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchGetUserById } from '../services/users'

export const AppProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(null)
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	const validateUser = async () => {
		console.log(loggedInUser)
		const token = localStorage.getItem('token')
		console.log(token)
		if (!token) {
			setLoggedInUser(null)
			setLoading(false)
			localStorage.removeItem('user')
			navigate('/login')
			return
		}
		try {
			const getUser = () => {
				return JSON.parse(localStorage.getItem('user')) || loggedInUser
			}
			const userToValidate = getUser()
			console.log(userToValidate, ' user to validate')
			const user = await fetchGetUserById(userToValidate.id, token)
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
			navigate('/login')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		validateUser()
	}, [location.pathname])

	console.log('APP PROVIDER RAN')
	// useEffect(() => {
	// 	console.log('APP PROVIDER RAN IN USEEFFECT')
	// 	setLoading(true)
	// 	const storedUser = localStorage.getItem('user')
	// 	if (storedUser) {
	// 		const parsedUser = JSON.parse(storedUser)
	// 		setLoggedInUser(parsedUser)
	// 	}
	// 	setLoading(false)
	// }, [])

	return <AppContext.Provider value={{ loggedInUser, setLoggedInUser, loading, setLoading }}>{children}</AppContext.Provider>
}
