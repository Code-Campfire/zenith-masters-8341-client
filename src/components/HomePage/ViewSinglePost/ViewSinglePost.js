import { useEffect, useState } from 'react'
import { fetchApiPost, postUrls } from '../../../services/apiPost'
import './ViewSinglePost.css'
import { fetchApiGet, getUrls } from '../../../services/apiGet'
import { ProfilePicture } from '../../UserProfile/ProfilePicture/ProfilePicture'

export function ViewSinglePost({ newsArticle, setNewsArticle, setIsOpen, postImage, profilePicture }) {
	const [content, setContent] = useState(null)
	const [comments, setComments] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [tempImage, setTempImage] = useState('https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=')

	useEffect(() => {
		setIsLoading(true)
		async function handleFetchingComments() {
			try {
				const postWithComments = await fetchApiGet(getUrls.commentsByPostId(newsArticle.id))
				console.log(postWithComments, ' post with comments')
				const { comments } = postWithComments
				console.log(comments, ' comments')
				if (Array.isArray(comments)) setComments(comments)
				else setComments(null)
			} catch (err) {
				console.error(`Error fetching post with comments: `, err)
			}
		}
		handleFetchingComments()
		setIsLoading(false)
	}, [])

	return (
		<div className="sp-container">
			<div className="sp-upper-half">
				<div className="sp-heading">
					<ProfilePicture customClass={'pp-post'} />
					<div className="name-timestamp-container">
						{/* <div className="article-username">{author?.username}</div> */}
						{/* <div className="article-username">User Id: {author.id} (testing only)</div> */}
						<div className="sp-username">Post Id: {newsArticle.id} (testing only)</div>
						<div className="sp-timestamp">{newsArticle.created_at.slice(0, 10)}</div>
					</div>
				</div>
				<div className="sp-title">{newsArticle.title}</div>
				<div className="sp-text-body">{newsArticle?.content}</div>
				<div className="sp-image-body">{postImage && <img className="sp-image" alt="post image" src={postImage} />}</div>
				{/* <div className="sp-image-body">{newsArticle.img ? <img alt="post image" src={newsArticle?.img} /> : <div>NOT IMAGE</div>}</div> */}
			</div>
			<div className="sp-lower-half">
				<div className="footer-top">
					<div>Likes: {newsArticle?.like_count}</div>
					<div>{newsArticle?.comment_count} comments</div>
				</div>
				<div className="sp-comments">
					{Array.isArray(comments) && comments.length > 0
						? comments.map(comment => {
								return (
									<div className="comment-in-post">
										<div className="comment-in-post-username">{comment.comment_author.username}</div>
										<div>{comment.content}</div>
									</div>
								)
						  })
						: ''}
				</div>
				<div className="sp-footer">
					{/* <div className="footer-bottom">
					<button onClick={handleLike}>Like</button>
					<button onClick={() => openModal('comment')}>Comment</button>
				</div> */}
					{/* {userIsAuthor && (
					<div className="sp-buttons">
						<button className="default-button" onClick={() => openModal('edit')}>
							Edit
						</button>
						<button className="default-button" onClick={handleDeletePost}>
							Delete
						</button>
					</div>
				)} */}
				</div>
			</div>
		</div>
	)
}

export default Comment
