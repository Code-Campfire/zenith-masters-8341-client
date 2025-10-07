import { useState } from 'react'
import './CreatePost.css'
import { useAppContext } from '../../App/AppContext/AppContext'
import { fetchApiPost, postUrls } from '../../../services/apiPost'
import ImageUploader from '../../GlobalComponents/ImageUploader/ImageUploader'
import { ProfilePicture } from '../../UserProfile/ProfilePicture/ProfilePicture'

export function CreatePost({ setNewsArticle, setIsOpen }) {
	const { loggedInUser } = useAppContext()
	const [bodyHasText, setBodyHasText] = useState(false)
	const [content, setContent] = useState('')
	const [applyImage, setApplyImage] = useState({})
	const [base64, setBase64] = useState(null)

	function handleButtonToggle(e) {
		if (e.target.value.length > 0) return setBodyHasText(true)
		setBodyHasText(false)
	}
	function handleSetContent(e) {
		setContent(e.target.value)
	}
	async function handleCreatingPost(e) {
		e.preventDefault()
		try {
			if (content.length === 0) return alert(`The body of your message must have content before posting.`)
			let uploadedImage

			if (base64) uploadedImage = await fetchApiPost(postUrls.imageUpload, { caption: 'Image uploaded successfully', upload_image: base64.upload_image })

			console.log({ content, image_ids: uploadedImage ? uploadedImage.id : [] })
			const newPost = await fetchApiPost(postUrls.posts, { content, image_ids: uploadedImage ? [uploadedImage.id] : [] })
			newPost.img = applyImage
			console.log(newPost, ' NEW POST')
			setNewsArticle(prev => [...prev, newPost])
			setIsOpen(false)
		} catch (err) {
			console.log(`Error: `, err)
		}
	}
	console.log(loggedInUser)
	return (
		<form>
			<div className="create-post-container">
				<div className="create-post-heading-container">
					<h3 className="create-post-heading">Create Post</h3>
				</div>
				<div className="create-post-user-info">
					<ProfilePicture customClass={`pp-post`} />
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
				{/* <div className="create-post-media">Add media to post</div> */}
				<ImageUploader setApplyImage={setApplyImage} setBase64={setBase64} base64={base64} />

				<button type="submit" onClick={handleCreatingPost} className={`create-post-button ${bodyHasText ? 'active' : ''}`}>
					Post
				</button>
			</div>
		</form>
	)
}

export default CreatePost
