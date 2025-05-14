import React, { useState } from 'react'
import '../styles/Home.css'
import { NewsArticle } from './NewsArticle'

function Home() {
	const [newsArticle, setNewsArticle] = useState([
		{ id: 1, title: 'Article 1', body: 'Body of article 1', bottom: 'like, comment, share, etc' },
		{ id: 2, title: 'Article 2', body: 'Body of article 2', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
		{ id: 3, title: 'Article 3', body: 'Body of article 3', bottom: 'like, comment, share, etc' },
	])
	return (
		<div className="home-container">
			<div className="status">
				<div className="status-top">
					<picture>
						<source srcSet="profile-img.svg" />
						<img style={{ borderRadius: '25px' }} src="profile-image.svg" alt="placeholder" width="50px" />
					</picture>
					<input type="text" placeholder="What's on your mind?" />
				</div>
				<div className="status-bottom">
					<button>Live Video</button>
					<button>Photo/video</button>
					<button>Feeling/activity</button>
				</div>
			</div>

			<div className="create-story-container">
				<div style={{ fontSize: '40px', margin: '10px' }}>+</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h3>Create Story</h3>
					<p>Share a photo or write something</p>
				</div>
			</div>

			<div className="newsfeed">
				{newsArticle.map(article => {
					return <NewsArticle key={article.id} article={article} />
				})}
			</div>
		</div>
	)
}

export default Home
