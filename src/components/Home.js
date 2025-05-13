import React from 'react'
import '../styles/Home.css'

function Home() {
	return (
		<div className="home-container">
			<div className="status">
				<div className="status-top">
					<picture>
						<img src="" alt="placeholder" />
					</picture>
				</div>
				<div className="status-bottom"></div>
			</div>

			<div className="create-story">Create story</div>

			<div className="newsfeed">
				<div>title</div>
				<div>body/image</div>
				<div>bottom</div>
			</div>
		</div>
	)
}

export default Home
