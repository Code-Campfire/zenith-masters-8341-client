import { useState } from 'react'
import '../../styles/Post.css'
import { useAppContext } from '../AppContext'
import { fetchApiPatch, patchUrls } from '../../services/apiPatch'

export function Comment({ newsArticle, setIsOpen }) {
	const [commentContent, setCommentContent] = useState(null)
	function handleSubmitComment() {
		console.log('submit comment')
		setIsOpen(false)
	}
	return (
		<form>
			<div className="create-post-container">
				<div className="create-post-heading-container">
					<h3 className="create-post-heading">Make a comment</h3>
				</div>
				<div>{newsArticle.content}</div>
				<div>Placeholder for user comments</div>
				<textarea onChange={e => {}} value={commentContent} className="" placeholder="Write a comment..."></textarea>
				<button type="submit" onClick={handleSubmitComment}>
					Submit comment
				</button>
			</div>
		</form>
	)
}

export default Comment
