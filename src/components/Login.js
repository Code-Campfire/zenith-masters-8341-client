import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { useReducer } from 'react'
import { fetchLogin } from '../services/auth'
import { useAppContext } from './AppContext'

export default function Login() {
	const { loggedInUser, setLoggedInUser } = useAppContext()
	const [user, dispatch] = useReducer(
		(state, action) => ({
			...state,
			...action,
		}),
		{
			username: '',
			password: '',
		}
	)
	const navigate = useNavigate()
	function navigateToRegister(e) {
		e.preventDefault()
		navigate('/register')
	}

	const handleLogin = async () => {
		try {
			const data = await fetchLogin(user.username, user.password)
			if (data.user) {
				setLoggedInUser(data.user)
				navigate('/')
			} else {
				throw new Error('Login failed: Failed to retrieve token')
			}
		} catch (error) {
			console.error('Login failed:', error)
			alert('Login failed. Please check your username and password.')
		}
	}

	return (
		<div className="grid-container">
			<form className="login-form" onSubmit={e => e.preventDefault()}>
				<fieldset style={{ display: 'flex', flexDirection: 'column' }}>
					<legend style={{ textAlign: 'center' }}>Sign in</legend>
					<label for="username"></label>
					<input type="text" id="username" name="username" className="login-input" placeholder="Username" onChange={e => dispatch({ username: e.target.value })} />
					<label for="password"></label>
					<input type="password" id="password" name="password" className="login-input" placeholder="Password" onChange={e => dispatch({ password: e.target.value })} />
				</fieldset>
				<button onClick={handleLogin} className="login-button">
					Log In
				</button>
				<Link className="forgot-password-link">Forgot password?</Link>
				<div className="separator"></div>
				<button onClick={navigateToRegister} className="create-account-button">
					Create new account
				</button>
			</form>
		</div>
	)
}
