import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './SearchBar'
import NotificationsBubble from './Notifications'
import '../styles/index.css'

export default function NavigationBar() {
	const [userInput, setUserInput] = useState('')
	const [newNotify, setNewNotify] = useState(0)

	const updateNotifications = () => {
		setNewNotify(10)
	}

	const { pathname } = useLocation()

	function isActiveLink(path) {
		return pathname === path
	}

	useEffect(() => {
		updateNotifications()
	}, [])

	return (
		<>
			<div id="navBar">
				{/* Left section of the NavBar for all screen sizes */}
				<div className="logo">
					<picture>
						<source srcSet="/fb-logo.svg" media="(min-width: 374px) and (max-width: 430px)" style={{ width: '15px' }} />
						<source srcSet="/fb-logo.svg" media="(min-width: 575.98px)" style={{ width: '15px' }} />
						<img src="/fb-logo.svg" className="fb-logo" alt="Facebook Logo" style={{ width: '42px' }} />
					</picture>
					<div className="bg-lg">
						<div className="searchbar-lg">
							<picture>
								<source
									media="(min-width: 540px)"
									srcSet="/eye-glass.svg"
									style={{
										width: '25px',
										height: '20px',
									}}
								/>
								<img src="/eye-glass.svg" alt="Search Icon" style={{ width: '25px', height: '20px', paddingTop: '3px' }} />
							</picture>
						</div>
					</div>
					<div className="bg-sm">
						<Link className="links-right" to="/search">
							<img
								src="/eye-glass.svg"
								style={{
									width: '25px',
									height: '20px',
								}}
								alt="Search Icon"
							/>
						</Link>
					</div>
					<div className="search-bar">
						<SearchBar searchInput={userInput} />
					</div>
				</div>
				{/* Mid section of the NavBar for min-width: 375-430px */}
				<div className="navButtons-mid">
					<Link className={`links-mid ${isActiveLink('/') ? 'active' : ''}`} to="/">
						<picture>
							<source media="(min-width: 913px)" srcSet="/home-icon.svg" />
							<img src="/home-icon.svg" alt="Home Icon" style={{ width: '25px' }} />
						</picture>
					</Link>
					<Link className={`links-mid ${isActiveLink('/marketplace') ? 'active' : ''}`} to="/marketplace">
						<picture>
							<source media="(min-width: 913px)" srcSet="/marketplace-icon.png" />
							<img src="/marketplace-icon.png" alt="Marketplace Icon" style={{ width: '25px' }} />
						</picture>
					</Link>
					<Link className={`links-mid ${isActiveLink('/groups') ? 'active' : ''}`} to="/groups">
						<picture>
							<source media="(min-width: 913px)" srcSet="/group.png" />
							<img src="/group.png" alt="Marketplace Icon" style={{ width: '25px' }} />
						</picture>
					</Link>
				</div>
				{/* Right section of the NavBar for all screen sizes (375/430, 540/768, 820/2560) */}
				<div className="navButtons-right">
					<div className="settings-links">
						<div className="bg-sm">
							<Link className="sm-screen" to="/menu">
								<img
									src="/bento-icon.svg"
									style={{
										width: '17px',
										height: '17px',
									}}
									alt="Search Icon"
								/>
							</Link>
						</div>
						<div className="bg-sm">
							<Link className="sm-screen" to="/notifications">
								<img
									src="/bell.svg"
									style={{
										width: '15px',
										height: '20px',
									}}
									alt="notifications Icon"
								/>
							</Link>
							<NotificationsBubble newNotifications={newNotify} />
						</div>
						<div className="bg-sm">
							<Link className="sm-screen" to="/account">
								<img
									src="/account-icon.png"
									style={{
										width: '30px',
										height: '30px',
									}}
									alt="Acct Icon"
								/>
							</Link>
						</div>
						<div className="bg-lg">
							<Link className="lg-screen" to="/menu">
								<img
									src="/bento-icon.svg"
									style={{
										width: '17px',
										height: '17px',
									}}
									alt="Search Icon"
								/>
							</Link>
						</div>
						<div className="bg-xlg">
							<Link className="xlg-screen" to="/menu">
								<img
									src="/bento-icon.svg"
									style={{
										width: '17px',
										height: '17px',
									}}
									alt="Search Icon"
								/>
							</Link>
						</div>
						<div className="bg-lg">
							<Link className="lg-screen" to="/notifications">
								<img
									src="/bell.svg"
									style={{
										width: '17px',
										height: 'px',
									}}
									alt="notifications Icon"
								/>
							</Link>
							<NotificationsBubble newNotifications={newNotify} />
						</div>
						<div className="bg-xlg">
							<Link className="xlg-screen" to="/notifications">
								<img
									src="/bell.svg"
									style={{
										width: '20px',
										height: '20px',
									}}
									alt="notifications Icon"
								/>
							</Link>
							<NotificationsBubble newNotifications={newNotify} />
						</div>
						<div className="bg-xxlg">
							<Link className="xxlg-screen" to="/notifications">
								<img
									src="/bell.svg"
									style={{
										width: '20px',
										height: '20px',
									}}
									alt="notifications Icon"
								/>
							</Link>
							<NotificationsBubble newNotifications={newNotify} />
						</div>
						<div className="bg-lg">
							<Link className="lg-screen" to="/account">
								<img
									src="/account-icon.png"
									style={{
										width: '30px',
										height: '30px',
									}}
									alt="Acct Icon"
								/>
							</Link>
						</div>
						<div className="bg-xlg">
							<Link className="xlg-screen" to="/account">
								<img
									src="/account-icon.png"
									style={{
										width: '30px',
										height: '30px',
									}}
									alt="Acct Icon"
								/>
							</Link>
						</div>
						<div className="bg-xxlg">
							<Link className="xxlg-screen" to="/account">
								<img
									src="/account-icon.png"
									style={{
										width: '30px',
										height: '30px',
									}}
									alt="Acct Icon"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
