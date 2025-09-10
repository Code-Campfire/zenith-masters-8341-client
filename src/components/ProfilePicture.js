import { useAppContext } from './AppContext'
import '../styles/ProfilePicture.css'

export const ProfilePicture = ({ customClass }) => {
	const { profilePicture } = useAppContext()
	return profilePicture ? <img id="profile-photo" className={customClass} src={profilePicture} alt="Profile-Pic" /> : 'Loading...'
}
