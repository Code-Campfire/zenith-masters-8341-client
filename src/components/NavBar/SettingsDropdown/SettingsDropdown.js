/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaCog, FaBookmark, FaSignOutAlt } from 'react-icons/fa'
import './SettingsDropdown.css'
import { ProfilePicture } from '../../UserProfile/ProfilePicture/ProfilePicture'
import { useAppContext } from '../../App/AppContext/AppContext'

export default function SettingsDropdown({ setIsDropdownActive }) {
	const resetSideBar = 768
	const [isCollapsed, setIsCollapsed] = useState(true)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= resetSideBar)
	const { setLoggedInUser, loggedInUser } = useAppContext()
	console.log(loggedInUser)
	const navigate = useNavigate()

	const toggleSideBar = () => {
		setIsCollapsed(!isCollapsed)
	}

	const { pathname } = useLocation()

	function activeLink(path) {
		return pathname === path
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= resetSideBar) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	//useEffect to add an event listener to window
	const menuRef = useRef(null)

	useEffect(() => {
		function handleClick(e) {
			// If click is outside the dropdown, close it
			console.log(e.target.className === 'nav-profile-icon')
			if (e.target.className === 'nav-profile-icon') return
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsDropdownActive(false)
			}
		}
		document.addEventListener('click', handleClick)

		return () => document.removeEventListener('click', handleClick)
	}, [])

	function handleLogout() {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		localStorage.removeItem('refresh')
		localStorage.removeItem('background-picture')
		localStorage.removeItem('profile-picture')
		setLoggedInUser(null)
		navigate('/login')
	}
	return (
		<div className="dropdown-nav" ref={menuRef}>
			<div
				className="dropdown-profile"
				onClick={() => {
					navigate('/account')
					setIsDropdownActive(false)
				}}
			>
				<ProfilePicture customClass={`pp-dropdown`} />
				<div className="dropdown-profile-name">{loggedInUser.username}</div>
			</div>
			<div className="dropdown-settings">
				<ul className="d-flex flex-column">
					<li onClick={() => setIsDropdownActive(false)} className="dropdown-button">
						<Link to="posts/saved" className="dropdown-link">
							<FaBookmark />
							<p style={{ marginLeft: '10px' }}>My Posts</p>
						</Link>
					</li>
					<li onClick={() => setIsDropdownActive(false)} className="dropdown-button">
						<Link to="settings" className="dropdown-link">
							<FaCog />
							<p style={{ marginLeft: '10px' }}>Settings</p>
						</Link>
					</li>
					<li
						onClick={() => {
							setIsDropdownActive(false)
							handleLogout()
						}}
						className="dropdown-button"
					>
						<Link to="login" className="dropdown-link">
							<FaSignOutAlt />
							<p style={{ marginLeft: '10px' }}>Logout</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
