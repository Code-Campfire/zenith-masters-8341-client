import { useState } from 'react'
import '../../styles/home-sub-components/newsArticleCard.css'
import { useAppContext } from '../AppContext'
import { deleteUrls, fetchApiDelete } from '../../services/apiDelete'
import Modal from '../post-components/Modal'
import EditPost from '../post-components/EditPost'
import { fetchApiGet, getUrls } from '../../services/apiGet'
import { fetchApiPost, postUrls } from '../../services/apiPost'
import Comment from '../post-components/Comment'
import { ViewSinglePost } from '../post-components/ViewSinglePost'

export const NewsArticleCard = ({ newsArticle, setNewsArticle }) => {
	const { loggedInUser } = useAppContext()
	const { author } = newsArticle
	const postImage = newsArticle?.images[0]?.image_base64 ? `data:image/png;base64,${newsArticle?.images[0]?.image_base64}` : null
	const userIsAuthor = loggedInUser?.id === author?.id ? true : false
	const [isOpen, setIsOpen] = useState(false)
	const [modalType, setModalType] = useState(null)
	const [tempImage, setTempImage] = useState(newsArticle?.img ? newsArticle.img : 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=')

	async function handleDeletePost() {
		await fetchApiDelete(deleteUrls.deletePost, newsArticle.id)
		const getPosts = async () => {
			const { results } = await fetchApiGet(postUrls.posts)
			if (results) {
				setNewsArticle(results)
			}
		}
		getPosts()
	}
	console.log(author, ' author')
	async function handleLike() {
		try {
			// if (author.id === loggedInUser.id) return alert(`You cannot like your own post`)
			await fetchApiPost(postUrls.likes(newsArticle.id))
			const updatedPost = await fetchApiGet(getUrls.postById(newsArticle.id))
			setNewsArticle(prev => prev.map(post => (post.id === updatedPost.id ? updatedPost : post)))
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
			<div className="news-heading-container" onClick={() => openModal('viewPost')}>
				<div className="picture-name-timestamp-container">
					<picture className="article-icon">
						<img alt="placeholder" src={`data:image/png;base64,${newsArticle?.images?.image_base64}`} style={{ height: '40px' }} />
					</picture>
					<div className="name-timestamp-container">
						<div className="article-username">{author?.username}</div>
						<div className="article-username">User Id: {author.id} (testing only)</div>
						<div className="article-username">Post Id: {newsArticle.id} (testing only)</div>
						<div className="article-timestamp">{newsArticle.created_at.slice(0, 10)}</div>
					</div>
				</div>
				<div className="news-article-title">{newsArticle.title}</div>
				<div className="news-article-text-body">{newsArticle?.content}</div>
			</div>
			<div className="news-article-body">{newsArticle.images ? <img className="user-post-image" alt="post image" src={postImage} /> : <img className="user-post-image" src={tempImage} />}</div>
			<div className="news-article-footer">
				<div className="footer-top">
					<div>Likes: {newsArticle?.like_count}</div>
					<div>{newsArticle?.comment_count} comments</div>
				</div>
				<div className="footer-bottom">
					<button onClick={handleLike}>Like</button>
					<button onClick={() => openModal('comment')}>Comment</button>
				</div>
				{userIsAuthor && (
					<div className="news-article-buttons">
						<button className="default-button" onClick={() => openModal('edit')}>
							Edit
						</button>
						<button className="default-button" onClick={handleDeletePost}>
							Delete
						</button>
					</div>
				)}
			</div>
			{isOpen && (
				<Modal isOpen={isOpen} onClose={closeModal}>
					{modalType === 'edit' && <EditPost newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} postImage={postImage} />}
					{modalType === 'comment' && <Comment newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} postImage={postImage} />}
					{modalType === 'viewPost' && <ViewSinglePost newsArticle={newsArticle} setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} postImage={postImage} />}
				</Modal>
			)}
		</div>
	)
}
