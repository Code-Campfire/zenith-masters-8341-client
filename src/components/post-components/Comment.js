import { useState } from 'react'
import { fetchApiPost, postUrls } from '../../services/apiPost'
import { fetchApiGet, getUrls } from '../../services/apiGet'
import '../../styles/Comment.css'

export function Comment({ newsArticle, setNewsArticle, setIsOpen, postImage }) {
	const [content, setContent] = useState(null)
	const [tempImage, setTempImage] = useState('https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=')

	async function handleSubmitComment(e) {
		e.preventDefault()
		try {
			const comment = await fetchApiPost(postUrls.comments(newsArticle.id), { content })
			console.log(comment, ' comment')
			const updatedPost = await fetchApiGet(getUrls.postById(newsArticle.id))
			setNewsArticle(prev => prev.map(post => (post.id === updatedPost.id ? updatedPost : post)))
		} catch (error) {
			console.error(`Failed to create comment: `, error)
		} finally {
			setIsOpen(false)
		}
		console.log('submit comment')
	}
	return (
		<form>
			<div className="comment-container">
				<div className="comment-heading-container">
					<h3 className="create-comment-heading">Make a comment</h3>
				</div>
				<div className="user-post-body">{newsArticle.content}</div>
				<img src={postImage || tempImage} className="user-post-image" />
				<div>Placeholder for user comments</div>
				<textarea
					onChange={e => {
						console.log(e.target.value)
						setContent(e.target.value)
					}}
					value={content}
					className="create-comment-body"
					placeholder="Write a comment..."
				></textarea>
				<button type="submit" onClick={handleSubmitComment}>
					Submit comment
				</button>
			</div>
		</form>
	)
}

export default Comment
