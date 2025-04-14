import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
	const navigate = useNavigate()
	function navigateToSignUp(e) {
		e.preventDefault()
		navigate('/signup')
	}
	return (
		<div className="grid-container">
			<form className="login-form">
				<fieldset style={{ display: 'flex', flexDirection: 'column' }}>
					<legend style={{ textAlign: 'center' }}>Sign in</legend>
					<label for="username"></label>
					<input type="text" id="username" name="username" className="login-input" placeholder="Username" />
					<label for="password"></label>
					<input type="password" id="password" name="password" className="login-input" placeholder="Password" />
				</fieldset>
				<button className="login-button">Log In</button>
				<Link className="forgot-password-link">Forgot password?</Link>
				<div className="separator"></div>
				<button onClick={navigateToSignUp} className="create-account-button">
					Create new account
				</button>
			</form>
		</div>
	)
}
