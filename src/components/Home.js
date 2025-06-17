import { useEffect, useState } from 'react'
import '../styles/Home.css'
import { useAppContext } from './AppContext'
import { NewsArticleCard } from './home-sub-components/NewsArticleCard'
import { useNavigate } from 'react-router-dom'
import Modal from './post-components/Modal'
import Post from './post-components/Post.js'
import { fetchApiGet, getUrls } from '../services/apiGet.js'

function Home() {
	const { loggedInUser } = useAppContext()
	const username = loggedInUser?.username
	const [newsArticle, setNewsArticle] = useState([
		// { id: 2, name: 'Bucky', timestamp: '5-22-2025', title: 'Article 1', body: 'Body of article 1', img: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 3, name: 'Tommy', timestamp: '5-22-2025', title: 'Article 2', body: 'Body of article 2', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 4, name: 'Timmy', timestamp: '5-22-2025', title: 'Article 3', body: 'Body of article 3', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 5, name: 'Jimmy', timestamp: '5-22-2025', title: 'Article 4', body: 'Body of article 4', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 6, name: 'Jamie', timestamp: '5-22-2025', title: 'Article 5', body: 'Body of article 5', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 7, name: 'Bobby', timestamp: '5-22-2025', title: 'Article 6', body: 'Body of article 6', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 8, name: 'Teddy', timestamp: '5-22-2025', title: 'Article 7', body: 'Body of article 7', like: 'Like', comment: 'Comment', share: 'Share' },
		// { id: 9, name: 'Andy', timestamp: '5-22-2025', title: 'Article 8', body: 'Body of article 8', like: 'Like', comment: 'Comment', share: 'Share' },
	])
	useEffect(() => {
		const getPosts = async () => {
			const posts = await fetchApiGet(getUrls.posts)
			if (posts) {
				setNewsArticle(posts)
			}
		}
		getPosts()
	}, [])
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
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
						<div onClick={() => setIsOpen(true)} className="whats-on-your-mind">
							{username && `What's on your mind, ${username}?`}
						</div>
					</div>
					<div className="status-bottom">
						<button>Live Video</button>
						<button>Photo/video</button>
						<button>Feeling/activity</button>
					</div>
				</div>
				<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<Post setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} />
				</Modal>

				<div className="create-story-container">
					<div style={{ fontSize: '40px', margin: '10px' }}>+</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<h3>Create Story</h3>
						<p>Share a photo or write something</p>
					</div>
				</div>

				<div className="newsfeed">
					{newsArticle
						.sort((a, b) => new Date(b.last_update) - new Date(a.last_update))
						.map(article => {
							console.log(article, ' ARTICLE')
							return <NewsArticleCard key={article.id} article={article} />
						})}
				</div>
			</div>
			<div className="home-sidebar-fake"></div>
		</div>
	)
}

export default Home
