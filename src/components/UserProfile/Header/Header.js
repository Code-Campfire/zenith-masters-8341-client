import './Header.css'
import React, { useEffect, useState } from 'react'
import ProfileImage from '../ProfileImage/ProfileImage'
import NameTitle from '../NameTitle/NameTitle'
import FriendsList from '../../FriendsList/FriendsList/FriendsList'
import { useAppContext } from '../../App/AppContext/AppContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { fetchApiPost, postUrls } from '../../../services/apiPost'
import { BackgroundPicture } from '../BackgroundPicture/BackgroundPicture'
import AddToStoryBtn from '../../GlobalComponents/Buttons/AddToStoryBtn'
import EditProfileBtn from '../../GlobalComponents/Buttons/EditProfileBtn'
import AddFriendBtn from '../../GlobalComponents/Buttons/AddFriendBtn'
import { fetchApiGet, getUrls } from '../../../services/apiGet'

export default function Header() {
	const [currentPosts, setCurrentPosts] = useState([])
	const [currentComponent, setCurrentComponent] = useState('posts')
	const { loggedInUser } = useAppContext()
	const navigate = useNavigate()
	const { backgroundPicture, setBackgroundPicture } = useAppContext()

	let userId = true
	console.log(loggedInUser, ' logged in user')

	const handleFileChange = async e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = async () => {
				const base64String = reader.result.split(',')[1] // Remove "data:image/png;base64,"
				// setImage(reader.result)
				setBackgroundPicture(reader.result)
				localStorage.setItem('background-picture', reader.result)
				const createdImage = await fetchApiPost(postUrls.imageUpload, { caption: 'Background pic!', upload_image: base64String })
				const assignProfilePic = await fetchApiPost(postUrls.assignBackgroundPic, { image_id: createdImage.id })

				const formData = new FormData()
				formData.append('image', reader.result)
			}

			reader.readAsDataURL(file)
		}
		console.log(file, ' this is the file')
	}

	return (
		<>
			<div id="header">
				<div id="coverBackgroundContainer">
					<label className="upload-label" for="fileInput">
						<BackgroundPicture customClass={`bg-profile`} />
						<input id="fileInput" style={{ display: 'none' }} type="file" accept="image/*" onChange={handleFileChange} />
					</label>
				</div>
				<div id="main-container">
					<div id="main">
						<div className="profile-pic-area">
							<ProfileImage />
						</div>
						<div className="title-name">
							<NameTitle fname={loggedInUser?.first_name} lname={loggedInUser?.last_name} />
						</div>
						<div className="action-btn-area">
							<div className="action-btn-container">
								{userId ? <AddToStoryBtn customStyles={{ width: '100px', height: '100px' }} /> : <AddFriendBtn />}
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
								navigate('posts')
								setCurrentComponent('posts')
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
								navigate('about')
								setCurrentComponent('about')
								document.getElementById('posts-btn').classList.remove('clicked')
								document.getElementById('friends-btn').classList.remove('clicked')
								document.getElementById('about-btn').classList.add('clicked')
							}}
						>
							Image Gallery
						</button>
						<button
							id="friends-btn"
							className="links-btn"
							onClick={() => {
								navigate('friends')
								setCurrentComponent('friends')
								document.getElementById('posts-btn').classList.remove('clicked')
								document.getElementById('about-btn').classList.remove('clicked')
								document.getElementById('friends-btn').classList.add('clicked')
							}}
						>
							Friends
						</button>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Outlet />
				</div>
				<div id="account-root" />
				{/* <div style={{ display: 'flex', justifyContent: 'center' }}>{(currentComponent === 'posts' && <p>Posts Component Placeholder</p>) || (currentComponent === 'about' && <p>About Page Component Placeholder </p>) || (currentComponent === 'friends' && <FriendsList />)}</div> */}
			</div>
		</>
	)
}
