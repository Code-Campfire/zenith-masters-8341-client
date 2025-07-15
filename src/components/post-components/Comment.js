import { useState } from 'react'
import { fetchApiPost, postUrls } from '../../services/apiPost'
import '../../styles/Post.css'

export function Comment({ newsArticle, setIsOpen }) {
	const [content, setContent] = useState(null)
	async function handleSubmitComment(e) {
		e.preventDefault()
		try {
			const comment = await fetchApiPost(postUrls.comments(newsArticle.id), { content })
			console.log(comment, ' comment')
		} catch (error) {
			console.error(`Failed to create comment: `, error)
		} finally {
			setIsOpen(false)
		}
		console.log('submit comment')
	}
	return (
		<form>
			<div className="create-post-container">
				<div className="create-post-heading-container">
					<h3 className="create-post-heading">Make a comment</h3>
				</div>
				<div>{newsArticle.content}</div>
				<div>Placeholder for user comments</div>
				<textarea
					onChange={e => {
						console.log(e.target.value)
						setContent(e.target.value)
					}}
					value={content}
					className=""
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
