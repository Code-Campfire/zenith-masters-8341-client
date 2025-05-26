import { Link, useNavigate } from 'react-router-dom'
import '../styles/Register.css'
import { useReducer } from 'react'
import { fetchRegister } from '../services/auth.js'

export default function Register() {
	const [state, dispatch] = useReducer(
		(state, action) => ({
			...state,
			...action,
		}),
		{
			email: '',
			username: '',
			password: '',
			matchingPassword: '',
		}
	)
	const navigate = useNavigate()

	async function handleSubmit(e) {
		e.preventDefault()
		console.log(state)
		if (state.password !== state.matchingPassword) {
			alert('Passwords do not match!')
		}

		try {
			const data = await fetchRegister(state.email, state.username, state.password)
			navigate('/')
			console.log('Success! ', data)
		} catch (errors) {
			console.log(errors)
			for (const error in errors) {
				errors[error].forEach(err => console.log(`Error: `, err))
			}
		}
	}

	return (
		<div className="grid-container">
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<fieldset style={{ display: 'flex', flexDirection: 'column' }}>
					<legend style={{ textAlign: 'center' }}>Create Account</legend>
					<label for="email"></label>
					<input type="text" id="email" name="email" className="login-input" placeholder="Email" onChange={e => dispatch({ email: e.target.value })} />

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
