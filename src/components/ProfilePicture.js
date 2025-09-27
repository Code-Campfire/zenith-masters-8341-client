import { useAppContext } from './AppContext'
import '../styles/ProfilePicture.css'

export const ProfilePicture = ({ customClass }) => {
	const { profilePicture } = useAppContext()
	console.log(profilePicture)
	return (
		<img
			id="profile-photo"
			className={customClass}
			src={profilePicture ? profilePicture : 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='}
			alt="profile-pic"
		/>
	)
}
