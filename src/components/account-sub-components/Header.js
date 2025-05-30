import '../../styles/account-sub-components/header.css'
import React, { useEffect, useState } from 'react'
import AddFriendBtn from './AddFriendBtn'
import AddToStoryBtn from './AddToStoryBtn'
import EditProfileBtn from './EditProfileBtn'
import ProfileImage from './ProfileImage'
import NameTitle from './NameTitle'
import FriendsList from '../friends-list/FriendsList'
import { useAppContext } from '../AppContext'

export default function Header({ friendListAmount, userObject }) {
	const [currentPosts, setCurrentPosts] = useState([])
	const [currentComponent, setCurrentComponent] = useState('posts')
	const { loggedInUser, setLoggedInUser } = useAppContext()

	useEffect(() => {
		if (currentComponent) scrollToElement()
	}, [currentComponent])

	const scrollToElement = () => {
		if (currentComponent) {
			const scrollToId = `${currentComponent}-anchor`
			if (scrollToId) {
				const scrollToElement = document.getElementById(`${scrollToId}`)
				scrollToElement?.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

	let userID = true
	return (
		<>
			<div id="header">
				<div id="coverBackgroundContainer">
					<div id="coverBackground">
						<picture>
							<source srcSet="cover-img.svg" alt="cover-img" />
							<img
								src="cover-img.svg"
								alt="cover-img"
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									width: '100%',
									height: '100%',
									maxHeight: '476px',
									borderBottomRightRadius: '10px',
									borderBottomLeftRadius: '10px',
								}}
							/>
						</picture>
					</div>
				</div>
				<div id="main-container">
					<div id="main">
						<div className="profile-pic-area">
							<ProfileImage />
						</div>
						<div className="title-name">
							<NameTitle fname={loggedInUser?.first_name} lname={loggedInUser?.last_name} />
							<div className="title-friendAmount">
								<p>{friendListAmount} friends</p>
							</div>
						</div>
						<div className="action-btn-area">
							<div className="action-btn-container">
								{userID ? <AddToStoryBtn customStyles={{ width: '100px', height: '100px' }} /> : <AddFriendBtn />}
								<EditProfileBtn />
							</div>
						</div>
					</div>
				</div>
				<div id="links-container">
					<div id="links">
						<button
							id="posts-btn"
							className="links-btn"
							onClick={() => {
								setCurrentComponent('posts')
								scrollToElement()
								document.getElementById('about-btn').classList.remove('clicked')
								document.getElementById('friends-btn').classList.remove('clicked')
								document.getElementById('posts-btn').classList.add('clicked')
							}}
						>
							Posts
						</button>
						<button
							id="about-btn"
							className="links-btn"
							onClick={() => {
								setCurrentComponent('about')
								scrollToElement()
								document.getElementById('posts-btn').classList.remove('clicked')
								document.getElementById('friends-btn').classList.remove('clicked')
								document.getElementById('about-btn').classList.add('clicked')
							}}
						>
							About
						</button>
						<button
							id="friends-btn"
							className="links-btn"
							onClick={() => {
								setCurrentComponent('friends')
								scrollToElement()
								document.getElementById('posts-btn').classList.remove('clicked')
								document.getElementById('about-btn').classList.remove('clicked')
								document.getElementById('friends-btn').classList.add('clicked')
							}}
						>
							Friends
						</button>
					</div>
				</div>
				<div id="account-root" />
				<div style={{ display: 'flex', justifyContent: 'center' }}>{(currentComponent === 'posts' && <p>Posts Component Placeholder</p>) || (currentComponent === 'about' && <p>About Page Component Placeholder </p>) || (currentComponent === 'friends' && <FriendsList />)}</div>
			</div>
		</>
	)
}
