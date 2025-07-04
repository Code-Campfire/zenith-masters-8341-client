/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaCog, FaBookmark, FaSignOutAlt } from 'react-icons/fa'
import { useAppContext } from './AppContext'
import '../styles/SideBar.css'

export default function SideBar() {
	const resetSideBar = 768
	const [isCollapsed, setIsCollapsed] = useState(true)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= resetSideBar)
	const { setLoggedInUser } = useAppContext()
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

	function handleLogout() {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		localStorage.removeItem('refresh')
		setLoggedInUser(null)
		navigate('/login')
	}
	return (
		<div className={`sideBar ${isCollapsed ? 'collapsed' : ''}`}>
			<button className={`sideBarToggle ${isMobile ? 'isMobile' : ''}`} onClick={toggleSideBar}>
				☰
			</button>
			<ul className="d-flex flex-column">
				<li className={activeLink('/posts/saved') ? 'active' : ''}>
					<Link to="posts/saved" className="sideBar-link">
						<FaBookmark /> Saved Posts
					</Link>
				</li>
				<li className={activeLink('/settings') ? 'active' : ''}>
					<Link to="settings" className="sideBar-link">
						<FaCog /> Settings
					</Link>
				</li>
				<li className={activeLink('/login') ? 'active' : ''} onClick={handleLogout}>
					<Link to="login" className="sideBar-link">
						<FaSignOutAlt /> Logout
					</Link>
				</li>
			</ul>
		</div>
	)
}
