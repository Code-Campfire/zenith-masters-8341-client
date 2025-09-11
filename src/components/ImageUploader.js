import { useEffect, useState } from 'react'
import '../styles/ImageUploader.css'

export function ImageUploader({ setApplyImage }) {
	const [selectedFile, setSelectedFile] = useState(null)
	const [previewURL, setPreviewURL] = useState(null)
	const [base64, setBase64] = useState('')
	const [uploadStatus, setUploadStatus] = useState('')

	const handleFileChange = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				const base64String = reader.result.split(',')[1] // Remove "data:image/png;base64,"
				setBase64(base64String)
				setPreviewURL(reader.result)
				setApplyImage(previewURL)
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

	const handleUpload = async (e, body) => {
		console.log(body)
		e.preventDefault()
		try {
			const token = localStorage.getItem('token')
			const response = await fetch('http://localhost:8000/bookface/imageUploads/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					caption: 'Test',
					upload_image: body,
				}),
			})
			const data = await response.json()
			console.log(data)
			if (response.ok) {
				setUploadStatus('Upload successful!')
			} else {
				setUploadStatus('Upload failed.')
			}
		} catch (error) {
			console.error(error)
			setUploadStatus('An error occurred.')
		}
	}

	return (
		<div className="create-post-media">
			<div>Add media to post</div>
			<input style={{}} type="file" accept="image/*" onChange={handleFileChange} />
			{previewURL && <img src={previewURL} alt="Preview" style={{ maxWidth: '200px' }} />}
			<p>{uploadStatus}</p>
			{previewURL && <button onClick={e => handleUpload(e, base64)}>Upload</button>}
		</div>
	)
}

export default ImageUploader
