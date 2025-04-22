import { Link } from 'react-router-dom'
import '../styles/SignUp.css'
import { useReducer } from 'react'

export default function SignUp() {
	const [state, dispatch] = useReducer(
		(state, action) => ({
			...state,
			...action,
		}),
		{
			username: '',
			password: '',
			matchingPassword: '',
		}
	)

	function handleSubmit(e) {
		e.preventDefault()
		// if (state.password !== state.matchingPassword) {
		// 	console.log(state)
		// 	alert('Passwords do not match!')
		// }
	}

	return (
		<div className="grid-container">
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<fieldset style={{ display: 'flex', flexDirection: 'column' }}>
					<legend style={{ textAlign: 'center' }}>Create Account</legend>
					<label for="username"></label>
					<input type="text" id="username" name="username" className="login-input" placeholder="Username" onChange={e => dispatch({ username: e.target.value })} />

					<label for="password"></label>
					<input type="password" id="password" name="password" className="login-input" placeholder="Password" onChange={e => dispatch({ password: e.target.value })} />

					<label for="matchingPassword"></label>
					<input type="password" id="matchingPassword" name="matchingPassword" className="login-input" placeholder="Matching password" onChange={e => dispatch({ matchingPassword: e.target.value })} />
				</fieldset>
				<button className="sign-up-button">Sign Up</button>
				<Link to="../login" className="forgot-password-link">
					Already have an account?
				</Link>
			</form>
		</div>
	)
}
