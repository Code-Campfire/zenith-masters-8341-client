import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useReducer } from 'react'
import { fetchLogin } from '../../../services/apiLoginAndRegister'
import { useAppContext } from '../../App/AppContext/AppContext'
import { fetchApiGet, getUrls } from '../../../services/apiGet'
import { fetchApiPost, postUrls } from '../../../services/apiPost'

export default function Login() {
	const { loggedInUser, setLoggedInUser, setProfilePicture, setBackgroundPicture } = useAppContext()
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
				const [bgRes, ppRes] = await Promise.all([await fetchApiGet(getUrls.backgroundprofileImageById(data.user.id)), await fetchApiGet(getUrls.profileImageById(data.user.id))])
				console.log(ppRes)
				console.log(bgRes)
				const ppPic = `data:image/png;base64,${ppRes?.image_base64}`
				const bgPic = `data:image/png;base64,${bgRes?.image_base64}`
				console.log(ppPic)
				console.log(bgPic)
				if (!ppRes) localStorage.setItem('profile-picture', `https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=`)
				else localStorage.setItem('profile-picture', ppPic)
				if (!bgRes) localStorage.setItem('background-picture', `https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=`)
				else localStorage.setItem('background-picture', bgPic)

				setBackgroundPicture(bgPic)
				setProfilePicture(ppPic)

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
