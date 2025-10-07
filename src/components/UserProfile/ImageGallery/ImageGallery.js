import { useEffect, useRef, useState } from 'react'
import { fetchApiGet, getUrls } from '../../../services/apiGet'
import './ImageGallery.css'
import Modal from '../../GlobalComponents/Modal/Modal'
import ConfirmationModal from '../ConfirmationBox/ConfirmationBox'
import Confirmation from '../ConfirmationBox/ConfirmationBox'

export const ImageGallery = () => {
	const [imageGallery, setImageGallery] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
	const [viewedImage, setViewedImage] = useState({
		image_id: null,
		image_base64: null,
	})
	const [selection, setSelection] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [pagination, setPagination] = useState(null)

	function createPagination(pictures) {
		console.log(pictures)
		const itemsPerPage = 10
		const length = pictures.count
		const numberOfPages = Math.ceil(length / itemsPerPage)
		const lastIndex = currentPage * itemsPerPage - 1
		const firstIndex = 0
		const lastPage = length % itemsPerPage
		const images = pictures.results.slice(firstIndex, lastIndex + 1)
		return {
			images,
			length,
			lastIndex,
			firstIndex,
			lastPage,
			numberOfPages,
		}
	}

	const imageGalleryRef = useRef(null)
	useEffect(() => {
		const setPictures = async () => {
			console.log(currentPage, ' current page')
			const images = await fetchApiGet(getUrls.images(currentPage))
			console.log(images, ' images')
			const newPagination = createPagination(images)
			console.log(newPagination)
			setPagination(newPagination)
			// setImageGallery(images.results)
		}
		setPictures()
	}, [currentPage])

	useEffect(() => {
		if (imageGalleryRef.current) imageGalleryRef.current.scrollIntoView({ behavior: 'smooth' })
	}, [])

	function next() {
		setCurrentPage(prev => (prev + 1 <= pagination.numberOfPages ? prev + 1 : currentPage))
	}
	function previous() {
		setCurrentPage(prev => (prev - 1 >= 1 ? prev - 1 : currentPage))
	}
	function goToPage(pageToGoTo) {
		setCurrentPage(pageToGoTo)
	}

	return (
		<div id="image-gallery-anchor" className="image-gallery-container" ref={imageGalleryRef}>
			<div className="gallery-nav">
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
					<h2>Image Gallery</h2>
				</div>
			</div>
			<div className="bot-nav"></div>
			<div className="image-gallery-layout">
				{pagination &&
					pagination.images.map(image => {
						console.log(image)
						const imageUrl = `data:image/png;base64,${image.image_base64}`
						return (
							<div className="gallery-image-container">
								<img
									className="gallery-image"
									src={imageUrl}
									alt="img"
									onClick={() => {
										setIsOpen(true)
										setViewedImage({
											image_id: image.id,
											image_base64: imageUrl,
										})
									}}
								/>
							</div>
						)
					})}
			</div>
			<div className="image-gallery-pagination">
				<button className="pagination-arrow" onClick={previous}>
					{'<'}
				</button>
				<div className="pagination-numbers-container">
					{pagination &&
						Array.from({ length: pagination.numberOfPages }).map((item, index) => {
							return (
								<button className="pagination-number" onClick={() => goToPage(index + 1)} style={{ backgroundColor: index + 1 === currentPage ? 'lightgrey' : '' }}>
									{index + 1}
								</button>
							)
						})}
				</div>
				<button className="pagination-arrow" onClick={next}>
					{'>'}
				</button>
			</div>
			<Modal
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false)
					setIsConfirmationOpen(false)
				}}
			>
				{
					<div style={{ backgroundColor: '#ebebeb', position: 'relative', border: '8px outset black', borderRadius: '4px' }}>
						{isConfirmationOpen && <Confirmation selection={selection} isConfirmationOpen={isConfirmationOpen} setIsConfirmationOpen={setIsConfirmationOpen} viewedImage={viewedImage} />}
						<img style={{ display: 'block', width: '100%' }} src={viewedImage.image_base64} alt="no img" />
						<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
							<div style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>
								<button
									className="image-gallery-button"
									onClick={() => {
										setIsConfirmationOpen(true)
										setSelection('PROFILE')
									}}
								>
									Set As Profile
								</button>
								<button
									className="image-gallery-button"
									onClick={() => {
										setIsConfirmationOpen(true)
										setSelection('BACKGROUND')
									}}
								>
									Set As Background
								</button>
								<button
									style={{ backgroundColor: 'red' }}
									className="image-gallery-button"
									onClick={() => {
										setIsConfirmationOpen(true)
										setSelection('DELETE')
									}}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				}
			</Modal>
		</div>
	)
}
