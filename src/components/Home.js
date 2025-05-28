import React, { useState } from 'react'
import '../styles/Home.css'
import { useAppContext } from './AppContext'
import { NewsArticleCard } from './home-sub-components/NewsArticleCard'
import { useNavigate } from 'react-router-dom'

function Home() {
	const { loggedInUser } = useAppContext()
	const username = loggedInUser?.username || 'user'
	const [newsArticle, setNewsArticle] = useState([
		{ id: 1, name: 'Bucky', timestamp: '5-22-2025', title: 'Article 1', body: 'Body of article 1', img: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 2, name: 'Tommy', timestamp: '5-22-2025', title: 'Article 2', body: 'Body of article 2', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 3, name: 'Timmy', timestamp: '5-22-2025', title: 'Article 3', body: 'Body of article 3', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 4, name: 'Jimmy', timestamp: '5-22-2025', title: 'Article 4', body: 'Body of article 4', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 5, name: 'Jamie', timestamp: '5-22-2025', title: 'Article 5', body: 'Body of article 5', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 6, name: 'Bobby', timestamp: '5-22-2025', title: 'Article 6', body: 'Body of article 6', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 7, name: 'Teddy', timestamp: '5-22-2025', title: 'Article 7', body: 'Body of article 7', like: 'Like', comment: 'Comment', share: 'Share' },
		{ id: 8, name: 'Andy', timestamp: '5-22-2025', title: 'Article 8', body: 'Body of article 8', like: 'Like', comment: 'Comment', share: 'Share' },
	])
	const navigate = useNavigate()
	function handleSidebarClick(e) {
		const sideBarItems = document.querySelectorAll('.home-sidebar-item')
		const sideBarItemsArray = Array.from(sideBarItems)
		sideBarItemsArray.forEach(item => {
			item.classList.remove('active')
		})
		e.target.classList.add('active')
	}
	return (
		<div className="home-container">
			<div className="home-sidebar-wrapper">
				<div className="home-sidebar">
					<div
						className="home-sidebar-item"
						onClick={e => {
							handleSidebarClick(e)
							navigate('/account')
						}}
					>
						<picture>
							<source srcset="profile-img.svg" />
							<img alt="placeholder" style={{ borderRadius: '20px', width: '40px', marginRight: '20px' }} />
						</picture>
						<div>{username}</div>
					</div>
					<div className="home-sidebar-item" onClick={handleSidebarClick}>
						Placeholder 1
					</div>
					<div className="home-sidebar-item" onClick={handleSidebarClick}>
						Placeholder 1
					</div>
					<div className="home-sidebar-item" onClick={handleSidebarClick}>
						Placeholder 1
					</div>
					<div className="home-sidebar-item" onClick={handleSidebarClick}>
						Placeholder 1
					</div>
					<div className="home-sidebar-item" onClick={handleSidebarClick}>
						Placeholder 1
					</div>
					<div className="home-sidebar-item" onClick={handleSidebarClick}>
						Placeholder 1
					</div>
				</div>
			</div>
			<div className="home-content-container">
				<div className="status">
					<div className="status-top">
						<picture>
							<source srcSet="profile-img.svg" />
							<img style={{ borderRadius: '25px' }} src="profile-image.svg" alt="placeholder" width="50px" />
						</picture>
						<div className="whats-on-your-mind">{`What's on your mind, ${username}?`}</div>
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
						return <NewsArticleCard key={article.id} article={article} />
					})}
				</div>
			</div>
			<div className="home-sidebar-fake"></div>
		</div>
	)
}

export default Home
