import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../../App/AppContext/AppContext.js'
import { NewsArticleCard } from '../NewsArticleCard/NewsArticleCard.js'
import { useNavigate } from 'react-router-dom'
import { CreatePost } from '../CreatePost/CreatePost.js'
import { fetchApiGet, getUrls } from '../../../services/apiGet.js'
import Modal from '../../GlobalComponents/Modal/Modal.js'
import { ProfilePicture } from '../../UserProfile/ProfilePicture/ProfilePicture.js'
import './Home.css'

function Home() {
	const { loggedInUser } = useAppContext()
	const username = loggedInUser?.username
	const [newsArticle, setNewsArticle] = useState([])
	const [page, setPage] = useState(1)
	const [isOpen, setIsOpen] = useState(false)
	const mainContentRef = useRef(null)
	const navigate = useNavigate()

	const debounceTimer = useRef(null)

	const scrollInfo = useRef({
		scrollTop: 0,
		clientHeight: 0,
		scrollHeight: 0,
	})

	useEffect(() => {
		const mainContent = document.querySelector('.main-content')

		mainContentRef.current = mainContent

		async function handleScroll() {
			let { scrollTop, clientHeight, scrollHeight } = mainContent
			scrollInfo.current = {
				scrollTop,
				clientHeight,
				scrollHeight,
			}
			if (scrollTop + clientHeight >= scrollHeight - 200) {
				if (debounceTimer.current === null) {
					setPage(prev => prev + 1)

					debounceTimer.current = setTimeout(() => {
						const { scrollTop, clientHeight, scrollHeight } = scrollInfo.current
						if (scrollTop + clientHeight >= scrollHeight - 1) {
							setPage(prev => prev + 1)
						}
						debounceTimer.current = null
					}, 2000)
				}
			}
		}

		mainContent.addEventListener('scroll', handleScroll)
		return () => {
			mainContent.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		async function run() {
			try {
				async function fetchMorePosts() {
					const { results } = await fetchApiGet(getUrls.paginatedPosts(page, 3))
					console.log(results[0].author.profile_pic)
					// const profileImages = await fetchApiGet(getUrls.profileImageById())
					if (results) {
						setNewsArticle(prev => [...prev, ...results])
					}
				}
				await fetchMorePosts()
			} catch (err) {
				console.log(`Error: `, err)
			}
		}
		run()
	}, [page])

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
							<ProfilePicture customClass={`pp-sidebar`} />
							{/* <img alt="placeholder" style={{ borderRadius: '20px', width: '40px', marginRight: '20px' }} /> */}
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
							<ProfilePicture customClass={`pp-home`} />
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
					<CreatePost setNewsArticle={setNewsArticle} setIsOpen={setIsOpen} />
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
						.map((newsArticle, index) => {
							console.log(newsArticle, ' ARTICLE')
							return <NewsArticleCard key={index} newsArticle={newsArticle} setNewsArticle={setNewsArticle} />
						})}
				</div>
			</div>
			<div className="home-sidebar-fake"></div>
		</div>
	)
}

export default Home
