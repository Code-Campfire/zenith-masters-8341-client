import { useContext } from 'react'
import { AppContext } from './AppContext'
import { Navigate } from 'react-router-dom'

export default function AuthRoute({ children }) {
	const { user } = useContext(AppContext)
	let authorized = false
	let hasToken = localStorage.getItem('token')
	if (user && hasToken) {
		authorized = true
	}
	return authorized ? children : <Navigate to="/login" />
}
