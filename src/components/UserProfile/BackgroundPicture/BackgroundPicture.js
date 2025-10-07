import { useAppContext } from '../../App/AppContext/AppContext'
import './BackgroundPicture.css'

export const BackgroundPicture = ({ customClass }) => {
	const { backgroundPicture } = useAppContext()
	return backgroundPicture ? <img id="background-picture" className={customClass} src={backgroundPicture} alt="Background-Pic" /> : 'Loading...'
}
