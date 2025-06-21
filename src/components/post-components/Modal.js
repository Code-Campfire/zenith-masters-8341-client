// src/components/Modal.jsx
import ReactDOM from 'react-dom'
import '../../styles/Modal.css'

// Portal lets you render modal outside the normal DOM flow
function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal-content" onClick={e => e.stopPropagation()}>
				{children}
				<button onClick={onClose} className="modal-close">
					&times;
				</button>
			</div>
		</div>,
		document.body
	)
}

export default Modal
