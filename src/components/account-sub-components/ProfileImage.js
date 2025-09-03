import { useEffect } from 'react'
import { useAppContext } from '../AppContext'
import { fetchApiGet, getUrls } from '../../services/apiGet'

export default function ProfileImage() {
	// const { loggedInUser } = useAppContext()
	// useEffect(() => {
	// 	async function setProfilePic() {
	// 		const images = await fetchApiGet(getUrls.images)
	// 		console.log(images)
	// 	}
	// 	setProfilePic()
	// }, [loggedInUser])
	return (
		<>
			<div>
				<picture>
					<source srcSet="profile-img.svg" alt="" />
					<img src="profile-img.svg" alt="profile" id="profile-photo" />
				</picture>
			</div>
		</>
	)
}
