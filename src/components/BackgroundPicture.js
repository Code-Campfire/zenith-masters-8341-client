import { useAppContext } from './AppContext'
import '../styles/BackgroundPicture.css'

export const BackgroundPicture = ({ customClass }) => {
	const { backgroundPicture } = useAppContext()
	return backgroundPicture ? <img id="background-picture" className={customClass} src={backgroundPicture} alt="Background-Pic" /> : 'Loading...'
}
