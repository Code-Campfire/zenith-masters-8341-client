import { useEffect, useRef, useState } from 'react'
import { fetchApiGet, getUrls } from '../../../services/apiGet'
import './SavedPosts.css'
import Modal from '../../GlobalComponents/Modal/Modal'
import Confirmation from '../ConfirmationBox/ConfirmationBox'
import { ViewSinglePost } from '../../HomePage/ViewSinglePost/ViewSinglePost'

export const SavedPosts = () => {
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
	const [viewedImage, setViewedPost] = useState({
		prop: null,
		prop2: null,
	})
	const [selection, setSelection] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [pagination, setPagination] = useState(null)
	const [usersPosts, setUsersPosts] = useState(null)
	const [isOpen, setIsOpen] = useState(false)

	function createPagination(posts) {
		console.log(posts)
		const itemsPerPage = 10
		const length = posts.count
		const numberOfPages = Math.ceil(length / itemsPerPage)
		const lastIndex = currentPage * itemsPerPage - 1
		const firstIndex = 0
		const lastPage = length % itemsPerPage
		const usersPosts = posts.results.slice(firstIndex, lastIndex + 1)
		return {
			usersPosts,
			length,
			lastIndex,
			firstIndex,
			lastPage,
			numberOfPages,
		}
	}

	const imageGalleryRef = useRef(null)
	// useEffect(() => {
	// 	const setPictures = async () => {
	// 		const images = await fetchApiGet(getUrls.images(currentPage))
	// 		console.log(images)
	// 		const newPagination = createPagination(images)
	// 		setPagination(newPagination)
	// 	}
	// 	setPictures()
	// }, [currentPage])

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

	// async function handleLike() {
	// 	try {
	// 		await fetchApiPost(postUrls.likes(newsArticle.id))
	// 		const updatedPost = await fetchApiGet(getUrls.postById(newsArticle.id))
	// 		setNewsArticle(prev => prev.map(post => (post.id === updatedPost.id ? updatedPost : post)))
	// 	} catch (error) {
	// 		alert(`You've already liked this post!`)
	// 		console.error(`Like failed: ${error}`)
	// 	}
	// }

	function openModal() {
		setIsOpen(true)
	}
	function closeModal() {
		setIsOpen(false)
	}

	useEffect(() => {
		async function retrieveAllUsersPosts() {
			const usersPosts = await fetchApiGet(getUrls.allUsersPosts)
			const newPagination = createPagination(usersPosts)
			setPagination(newPagination)
			console.log(newPagination, ' NEW POST PAGINATION')
			console.log(usersPosts.results)
			setUsersPosts(usersPosts.results)
		}
		retrieveAllUsersPosts()
	}, [currentPage])

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
					pagination.usersPosts.map(post => {
						console.log(post)
						return (
							// <div
							// 	key={post.id}
							// 	className="gallery-image-container"
							// 	onClick={() => {
							// 		setIsOpen(true)
							// 		setViewedPost(post)
							// 	}}
							// >
							<div className="news-article-container">
								{isOpen && <ViewSinglePost setIsOpen={setIsOpen} newsArticle={post} />}
								<div className="news-heading-container" onClick={() => openModal('viewPost')}>
									<div className="picture-name-timestamp-container">
										{/* <img className="pp-post" alt="placeholder" src={!profilePicture ? tempImage : profilePicture} /> */}
										<div className="name-timestamp-container">
											{/* <div className="article-username">{author?.username}</div> */}
											<div className="article-timestamp">{post.created_at.slice(0, 10)}</div>
										</div>
									</div>
									<div className="news-article-title">{post.title}</div>
									<div className="news-article-text-body">{post?.content}</div>
								</div>
								{console.log(post.images)}
								<div className="news-article-body">{post.images.length > 0 ? <img className="user-post-image" alt="post image" src={post.images[0]} /> : ''}</div>
								<div className="news-article-footer">
									<div className="footer-top">
										<div>Likes: {post?.like_count}</div>
										<div>{post?.comment_count} comments</div>
									</div>
									<div className="footer-bottom">
										{/* <button onClick={handleLike}>Like</button> */}
										{/* <button onClick={() => openModal('comment')}>Comment</button> */}
									</div>
									<div className="news-article-buttons">
										{/* <button className="default-button" onClick={() => openModal('edit')}>
											Edit
										</button>
										<button className="default-button" onClick={handleDeletePost}>
											Delete
										</button> */}
									</div>
								</div>
								{/* {isOpen && (
									<Modal isOpen={isOpen} onClose={closeModal}>
										{modalType === 'edit' && <EditPost newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} postImage={postImage} profilePicture={profilePicture} />}
										{modalType === 'comment' && <Comment newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} postImage={postImage} profilePicture={profilePicture} />}
										{modalType === 'viewPost' && <ViewSinglePost newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} postImage={postImage} profilePicture={profilePicture} />}
									</Modal>
								)} */}
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
