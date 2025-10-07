import { useAppContext } from '../../App/AppContext/AppContext'
import './ProfilePicture.css'

export const ProfilePicture = ({ customClass, customContainerClass }) => {
	const { profilePicture } = useAppContext()
	console.log(profilePicture)
	return (
		<div className={customContainerClass}>
			<img
				id="profile-photo"
				className={customClass}
				src={profilePicture ? profilePicture : 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='}
				alt="profile-pic"
			/>
		</div>
	)
}
