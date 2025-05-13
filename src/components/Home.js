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
						<img src="" alt="placeholder" />
					</picture>
					<input type="text" placeholder="What's on your mind?" />
				</div>
				<div className="status-bottom">
					<button>Live video</button>
					<button>Photo/video</button>
					<button>Feeling/activity</button>
				</div>
			</div>

			<div className="create-story-container">
				{/* <picture>
					<source srcSet="/plus-sign.svg" style={{ width: '5px', height: '5px' }} />
					<img src="/plus-sign.svg" alt="plus" style={{ width: '17px', height: '17px', marginRight: '10px' }} />
				</picture> */}
				<div style={{ fontSize: '30px', margin: '10px' }}>+</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<p>Create Story</p>
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
