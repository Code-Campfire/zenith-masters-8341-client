import { useEffect, useRef, useState } from 'react'
import { fetchApiGet, getUrls } from '../../../services/apiGet'
import './StoredPosts.css'
import Modal from '../../GlobalComponents/Modal/Modal'
import Confirmation from '../ConfirmationBox/ConfirmationBox'
import { ViewSinglePost } from '../../HomePage/ViewSinglePost/ViewSinglePost'

export const StoredPosts = () => {
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
	const [selection, setSelection] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [pagination, setPagination] = useState(null)
	const [usersPosts, setUsersPosts] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const [viewedPost, setViewedPost] = useState(null)

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

	function openModal() {
		setIsOpen(true)
	}
	function closeModal() {
		setIsOpen(false)
	}

	function openModalHandler(post) {
		setIsOpen(true)
		setViewedPost(post)
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
					<h2>My Posts</h2>
				</div>
			</div>
			<div className="bot-nav"></div>
			<div className="stored-posts-layout">
				{pagination &&
					pagination.usersPosts.map(post => {
						console.log(post)
						const postContent = post.content.length > 20 ? post.content.slice(0, 20) + '...' : post.content
						const postImage = post?.images.length > 0 && `data:image/png;base64,${post.images[0].image_base64}`
						return (
							<div className="news-article-container" onClick={() => openModalHandler(post)}>
								<div className="news-heading-container">
									<div className="picture-name-timestamp-container">
										{/* <img className="pp-post" alt="placeholder" src={!profilePicture ? tempImage : profilePicture} /> */}
										<div className="name-timestamp-container">
											{/* <div className="article-username">{author?.username}</div> */}
											<div className="article-timestamp">{post.created_at.slice(0, 10)}</div>
										</div>
									</div>
									<div className="news-article-title">{post.title}</div>
									<div className="news-article-text-body">{postContent}</div>
								</div>
								{post.images.length > 0 ? (
									<div className="myPost-image-container">
										<img className="myPost-image" alt="post image" src={postImage} />
									</div>
								) : (
									''
								)}
								<div className="news-article-footer">
									<div className="footer-top">
										<div>Likes: {post?.like_count}</div>
										<div>{post?.comment_count} comments</div>
									</div>
									<div className="footer-bottom"></div>
									<div className="news-article-buttons"></div>
								</div>
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
			<Modal isOpen={isOpen} onClose={closeModal}>
				{isOpen && <ViewSinglePost setIsOpen={setIsOpen} newsArticle={viewedPost} />}
			</Modal>
		</div>
	)
}
