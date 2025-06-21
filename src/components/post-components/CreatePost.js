import { useState } from 'react'
import '../../styles/Post.css'
import { useAppContext } from '../AppContext'
import { fetchApiPost } from '../../services/apiPost'
import { getUrls } from '../../services/apiGet'

export function CreatePost({ setNewsArticle, setIsOpen }) {
	const { loggedInUser } = useAppContext()
	const [bodyHasText, setBodyHasText] = useState(false)
	const [content, setContent] = useState('')

	function handleButtonToggle(e) {
		if (e.target.value.length > 0) return setBodyHasText(true)
		setBodyHasText(false)
	}
	function handleSetContent(e) {
		setContent(e.target.value)
	}
	async function handleCreatingPost(e) {
		e.preventDefault()
		if (content.length === 0) return alert(`The body of your message must have content before posting.`)
		const newPost = await fetchApiPost(getUrls.posts, { content })
		setNewsArticle(prev => [...prev, newPost])
		setIsOpen(false)
	}
	console.log(loggedInUser)
	return (
		<form>
			<div className="create-post-container">
				<div className="create-post-heading-container">
					<h3 className="create-post-heading">Create Post</h3>
				</div>
				<div className="create-post-user-info">
					<img alt="profile-pic" src="profile-img.svg" />
					<p>{loggedInUser && `${loggedInUser.username}`}</p>
				</div>
				<textarea
					onChange={e => {
						handleButtonToggle(e)
						handleSetContent(e)
					}}
					className="create-post-body"
					placeholder={`What's on your mind, ${loggedInUser.username}?`}
				></textarea>
				<div className="create-post-media">Add media to post</div>
				<button type="submit" onClick={handleCreatingPost} className={`create-post-button ${bodyHasText ? 'active' : ''}`}>
					Post
				</button>
			</div>
		</form>
	)
}

export default CreatePost
