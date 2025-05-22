import { Navigate } from 'react-router-dom'
import { useAppContext } from '../AppContext'
import { CgSpinner } from 'react-icons/cg'

export const AuthorizedRoute = ({ children }) => {
	const { loading } = useAppContext()
	const token = localStorage.getItem('token')
	const isLoggedIn = token ? true : false
	if (loading)
		return (
			<div>
				<CgSpinner />
			</div>
		)

	return isLoggedIn ? children : <Navigate to="/login" />
}
