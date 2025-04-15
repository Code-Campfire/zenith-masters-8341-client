import { Link, useNavigate } from 'react-router-dom'
import { fetchUserLogin } from '../services/auth'
import '../styles/Login.css'
import { useContext, useReducer } from 'react'
import { fetchUser } from '../services/user'
import { AppContext } from './AppContext'

export default function Login() {
	const { setUser } = useContext(AppContext)
	const [state, dispatch] = useReducer(
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
	function navigateToSignUp(e) {
		e.preventDefault()
		navigate('/signup')
	}

	async function handleUserLogin(e) {
		e.preventDefault()
		const user = {
			username: state.username,
			password: state.password,
		}
		const userWithToken = await fetchUserLogin(user)
		localStorage.setItem('token', userWithToken.token)
		setUser(userWithToken.user)
	}

	async function handleRetrieveUser(e) {
		e.preventDefault()
		const user = await fetchUser()
		console.log(user, ' user from react frontend')
	}
	return (
		<div className="grid-container">
			<form className="login-form" onSubmit={handleUserLogin}>
				<fieldset style={{ display: 'flex', flexDirection: 'column' }}>
					<legend style={{ textAlign: 'center' }}>Sign in</legend>
					<label for="username"></label>
					<input type="text" id="username" name="username" className="login-input" placeholder="Username" onChange={e => dispatch({ username: e.target.value })} />
					<label for="password"></label>
					<input type="password" id="password" name="password" className="login-input" placeholder="Password" onChange={e => dispatch({ password: e.target.value })} />
				</fieldset>
				<button className="login-button">Log In</button>
				<Link className="forgot-password-link">Forgot password?</Link>
				<div className="separator"></div>
				<button onClick={navigateToSignUp} className="create-account-button">
					Create new account
				</button>
				<button onClick={handleRetrieveUser} className="create-account-button">
					Get User
				</button>
			</form>
		</div>
	)
}
