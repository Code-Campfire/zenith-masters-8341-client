// src/components/Modal.jsx
import '../styles/ConfirmationModal.css'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from './AppContext'
import { fetchApiPost, postUrls } from '../services/apiPost'

// Portal lets you render modal outside the normal DOM flow
function Confirmation({ selection, isConfirmationOpen, setIsConfirmationOpen, viewedImage }) {
	const [isVisible, setIsVisible] = useState(false)
	const [profileOrBackground, setProfileOrBackground] = useState(null)
	const { image_id, image_base64 } = viewedImage
	console.log(image_id)

	const { setBackgroundPicture, setProfilePicture } = useAppContext()

	const handleSetPicture = async e => {
		// setImage(reader.result)
		setIsConfirmationOpen(false)
		if (selection === 'BACKGROUND') {
			setBackgroundPicture(image_base64)
			localStorage.setItem('background-picture', image_base64)
			await fetchApiPost(postUrls.assignBackgroundPic, { image_id })
		} else if (selection === 'PROFILE') {
			setProfilePicture(image_base64)
			localStorage.setItem('profile-picture', image_base64)
			await fetchApiPost(postUrls.assignProfilePic, { image_id })
		} else {
		}
	}

	function handleMouseUp(e) {
		const validClassNames = ['confirmation-box', 'confirmation-message', 'confirmation-button-container', 'confirmation-button']
		const classList = Array.from(e.target.classList)
		if (!classList.some(className => validClassNames.includes(className))) {
			setIsVisible(0)
			setIsConfirmationOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mouseup', e => handleMouseUp(e))
		return () => {
			document.removeEventListener('mouseup', handleMouseUp)
		}
	}, [])

	useEffect(() => {
		setIsVisible(1)
	}, [])

	//onClick={onClose}
	return (
		<div id="confirmation-box" className="confirmation-modal-container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity .7s ease' }}>
			<div className="confirmation-message">{selection !== 'DELETE' ? `Are you sure you want to set this as your ${selection}?` : `Are you sure you want to delete this picture? Jk can't do it yet`}</div>
			<div className="confirmation-button-container">
				<button className="confirmation-button" onClick={handleSetPicture}>
					YES
				</button>
				<button className="confirmation-button" onClick={() => setIsConfirmationOpen(false)}>
					NO
				</button>
			</div>
		</div>
	)
}

export default Confirmation
