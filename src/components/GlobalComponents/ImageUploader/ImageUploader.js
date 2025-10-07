import { useEffect, useState } from 'react'
import './ImageUploader.css'
import { fetchApiPost, postUrls } from '../../../services/apiPost'

export function ImageUploader({ setApplyImage, setBase64, base64 }) {
	const [selectedFile, setSelectedFile] = useState(null)
	const [previewURL, setPreviewURL] = useState(null)
	const [uploadStatus, setUploadStatus] = useState('')

	const handleFileChange = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				const base64String = reader.result.split(',')[1] // Remove "data:image/png;base64,"
				setBase64({
					upload_image: base64String,
					caption: 'Post Image',
				})
				console.log(reader.result)
				setPreviewURL(reader.result)
				setApplyImage(`data:image/png;base64,${previewURL}`)
				setSelectedFile(file)
				const formData = new FormData()
				formData.append('image', reader.result)
			}

			reader.readAsDataURL(file)
		}
		console.log(file, ' this is the file')
	}
	useEffect(() => {
		console.log(base64, ' base64')
		console.log(previewURL, 'preview URL')
		console.log(selectedFile, ' selected file')
	}, [base64])

	return (
		<div className="create-post-media">
			<div>Add media to post</div>
			<input type="file" accept="image/*" onChange={handleFileChange} />
			{previewURL && <img src={previewURL} alt="Preview" style={{ maxWidth: '200px' }} />}
			<p>{uploadStatus}</p>
		</div>
	)
}

export default ImageUploader
