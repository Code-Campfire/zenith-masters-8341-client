import { useState } from 'react'
import '../../styles/home-sub-components/newsArticleCard.css'
import { useAppContext } from '../AppContext'
import { deleteUrls, fetchApiDelete } from '../../services/apiDelete'
import Modal from '../post-components/Modal'
import EditPost from '../post-components/EditPost'
import { fetchApiGet } from '../../services/apiGet'
import { fetchApiPost, getUrls } from '../../services/apiPost'
import Comment from '../post-components/Comment'

export const NewsArticleCard = ({ newsArticle, setNewsArticle }) => {
	console.log(newsArticle, ' newsArticle')
	const [count, setCount] = useState(999)
	const { loggedInUser } = useAppContext()
	const { author } = newsArticle
	const [userIsAuthor] = useState(loggedInUser.id === author.id ? true : false)
	const [isOpen, setIsOpen] = useState(false)
	const [modalType, setModalType] = useState(null)

	async function handleDeletePost() {
		await fetchApiDelete(deleteUrls.deletePost, newsArticle.id)
		const getPosts = async () => {
			const { results } = await fetchApiGet(getUrls.posts)
			if (results) {
				setNewsArticle(results)
			}
		}
		getPosts()
	}

	async function handleLike() {
		try {
			await fetchApiPost(getUrls.likes(newsArticle.id))
		} catch (error) {
			alert(`You've already liked this post!`)
			console.error(`Like failed: ${error}`)
		}
	}

	function openModal(type) {
		setModalType(type)
		setIsOpen(true)
	}
	function closeModal() {
		setModalType(null)
		setIsOpen(false)
	}

	return (
		<div className="news-article-container">
			<div className="news-heading-container">
				<div className="picture-name-timestamp-container">
					<picture className="article-icon">
						<img
							alt="placeholder"
							src="https://static.vecteezy.com/system/resources/previews/027/989/305/non_2x/placeholder-icon-in-trendy-flat-style-isolated-on-white-background-placeholder-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg"
							style={{ height: '40px' }}
						/>
					</picture>
					<div className="name-timestamp-container">
						<div className="article-username">{author.username}</div>
						<div className="article-timestamp">{newsArticle.timestamp}</div>
					</div>
				</div>
				<div className="news-article-title">{newsArticle.title}--------------------------</div>
			</div>
			<div className="news-article-body">
				{newsArticle?.content}
				{/* <picture>
					<img alt src={article.img} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
				</picture> */}
			</div>
			<div className="news-article-footer">
				<div className="footer-top">
					<div>Likes: {count}</div>
					<div>99 comments</div>
				</div>
				<div className="footer-bottom">
					<button onClick={handleLike}>Like</button>
					<button onClick={() => openModal('comment')}>Comment</button>
				</div>
				{userIsAuthor && (
					<div className="news-article-buttons">
						<button onClick={() => openModal('edit')}>Edit</button>
						<button onClick={handleDeletePost}>Delete</button>
					</div>
				)}
			</div>
			{isOpen && (
				<Modal isOpen={isOpen} onClose={closeModal}>
					{modalType === 'edit' && <EditPost newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} />}
					{modalType === 'comment' && <Comment newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} />}
				</Modal>
			)}
		</div>
	)
}
