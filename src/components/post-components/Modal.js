// src/components/Modal.jsx
import ReactDOM from 'react-dom'
import '../../styles/Modal.css'
import { useRef, useState } from 'react'

// Portal lets you render modal outside the normal DOM flow
function Modal({ isOpen, onClose, children }) {
	const modalRef = useRef(null)

	const mouseDown = useRef(null)

	function handleMouseDown(e) {
		if (e.target.id === 'modal-backdrop') {
			mouseDown.current = true
			console.log('mouse goes down')
		}
	}

	function handleMouseUp(e) {
		if (e.target.id === 'modal-backdrop' && mouseDown.current) {
			onClose()
		}
		mouseDown.current = null
	}

	if (!isOpen) return null
	//onClick={onClose}
	return ReactDOM.createPortal(
		<div ref={modalRef} id="modal-backdrop" className="modal-backdrop" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
			<div id="modal-content" className="modal-content" onClick={e => e.stopPropagation()}>
				{children}
				{/* <button onClick={onClose} className="modal-close">
					&times;
				</button> */}
			</div>
		</div>,
		document.body
	)
}

export default Modal
