import { useEffect, useState } from 'react'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			const parsedUser = JSON.parse(storedUser)
			setLoggedInUser(parsedUser)
		}
		setLoading(false)
	}, [])

	return <AppContext.Provider value={{ loggedInUser, setLoggedInUser, loading, setLoading }}>{children}</AppContext.Provider>
}
