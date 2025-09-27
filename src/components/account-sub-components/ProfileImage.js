import { useEffect, useState } from 'react'
import { AppContext, useAppContext } from '../AppContext'
import { fetchApiGet, getUrls } from '../../services/apiGet'
import { fetchApiPost, postUrls } from '../../services/apiPost'
import { ProfilePicture } from '../ProfilePicture'

export default function ProfileImage() {
	// const { loggedInUser } = useAppContext()
	// useEffect(() => {
	// 	async function setProfilePic() {
	// 		const images = await fetchApiGet(getUrls.images)
	// 		console.log(images)
	// 	}
	// 	setProfilePic()
	// }, [loggedInUser])
	const { profilePicture, setProfilePicture } = useAppContext()

	const [image, setImage] = useState(profilePicture || null)

	const handleFileChange = async e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = async () => {
				const base64String = reader.result.split(',')[1] // Remove "data:image/png;base64,"
				// setImage(reader.result)
				setProfilePicture(reader.result)
				console.log(reader.result, ' STORED PROFILE PICTURE')
				localStorage.setItem('profile-picture', reader.result)
				const createdImage = await fetchApiPost(postUrls.imageUpload, { caption: 'PROFILEP IC!', upload_image: base64String })
				console.log(createdImage, ' CREATED IMAGE')
				const assignProfilePic = await fetchApiPost(postUrls.assignProfilePic, { image_id: createdImage.id })
				console.log(assignProfilePic)

				const formData = new FormData()
				formData.append('image', reader.result)
			}

			reader.readAsDataURL(file)
		}
		console.log(file, ' this is the file')
	}
	useEffect(() => {
		console.log(image)
	}, [image])
	return (
		<>
			<div>
				<picture>
					{/* <source srcSet="profile-img.svg" alt="" /> */}
					<label for="profilePicInput">
						{/* <img style={{ cursor: 'pointer' }} src={profilePicture || 'profile-img.svg'} alt="profile" id="profile-photo" /> */}
						<ProfilePicture customClass={`pp-profile`} />
					</label>
					<input id="profilePicInput" style={{ display: 'none' }} type="file" accept="image/*" onChange={handleFileChange} />
				</picture>
			</div>
		</>
	)
}
