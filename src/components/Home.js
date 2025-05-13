import React from 'react'
import '../styles/Home.css'

function Home() {
	// const [newsArticle, setNewsArticle] = useState([])
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
				<div>title</div>
				<div>body/image</div>
				<div>bottom</div>
			</div>
		</div>
	)
}

export default Home
