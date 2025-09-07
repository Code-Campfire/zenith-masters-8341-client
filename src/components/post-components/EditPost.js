import { useState } from 'react'
import '../../styles/Post.css'
import { useAppContext } from '../AppContext'
import { fetchApiPatch, patchUrls } from '../../services/apiPatch'

export function EditPost({ newsArticle, setNewsArticle, setIsOpen, postImage }) {
	console.log(newsArticle, ' EDIT POST NEWS ARTICLE')
	const { loggedInUser } = useAppContext()
	const [bodyHasText, setBodyHasText] = useState(false)
	const [content, setContent] = useState(newsArticle.content)
	const [tempImage] = useState('https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=')

	function handleButtonToggle(e) {
		if (e.target.value.length > 0) return setBodyHasText(true)
		setBodyHasText(false)
	}
	function handleSetContent(e) {
		setContent(e.target.value)
	}
	async function handleEditPost(e) {
		e.preventDefault()
		if (content.length === 0) return alert(`The body of your message must have content.`)
		const editedpost = await fetchApiPatch(patchUrls.patchPost, newsArticle.id, content)
		setNewsArticle(prev => prev.map(post => (post.id === editedpost.id ? editedpost : post)))
		// setNewsArticle(prev => [...prev, editedpost])
		setIsOpen(false)
	}
	console.log(loggedInUser)
	return (
		<form style={{ width: '100%' }}>
			<div className="create-post-container">
				<div className="create-post-heading-container">
					<h3 className="create-post-heading">Edit Post</h3>
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
					value={content}
					className="create-post-body"
					placeholder={`What's on your mind, ${loggedInUser.username}?`}
				/>
				<img style={{ maxHeight: '340px', width: '50%' }} src={postImage || tempImage} />
				<div className="create-post-media">Add media to post</div>
				<button type="submit" onClick={handleEditPost} className={`create-post-button ${bodyHasText ? 'active' : ''}`}>
					CONFIRM EDIT
				</button>
			</div>
		</form>
	)
}

export default EditPost
