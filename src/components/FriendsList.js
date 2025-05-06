import { useState } from 'react'
import '../styles/FriendsList.css'
import FriendsCard from './FriendsCard'

export default function FriendsList() {
	const [friends, setFriends] = useState([
		{ name: 'Jake' },
		{ name: 'Billy Nickles' },
		{ name: 'Jacob' },
		{ name: 'Allison' },
		{ name: 'Tommy' },
		{ name: 'Timmy' },
		{ name: 'Sharron' },
		{ name: 'Ronda' },
		{ name: 'Granny' },
		{ name: 'Tim' },
		{ name: 'Carlson' },
		{ name: 'Abby' },
		{ name: 'Dana' },
		{ name: 'Witherspoon' },
		{ name: 'Clodbo' },
		{ name: 'Radkipper' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
		{ name: 'Grandpa' },
	])
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 8
	const numberOfPages = Math.ceil(friends.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const currentItems = friends.slice(startIndex, startIndex + itemsPerPage)

	function goToPage(pageToGoTo) {
		setCurrentPage(pageToGoTo)
	}
	function next() {
		setCurrentPage(prev => (prev + 1 <= numberOfPages ? prev + 1 : currentPage))
	}
	function previous() {
		setCurrentPage(prev => (prev - 1 >= 1 ? prev - 1 : currentPage))
	}

	return (
		<div className="friends-list-container">
			<div className="friends-list-nav">
				<div className="top-nav">
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<picture>
							<source srcset="/friend.svg" />
							<img alt="Friend Icon" src="/friend.svg" style={{ width: '30px' }} />
						</picture>
						<h4>Friends</h4>
					</div>
					<div>Suggest Friends</div>
				</div>
				<div className="bot-nav">
					<ul style={{ listStyleType: 'none' }}>
						<li>
							<button>All Friends</button>
						</li>
						<li>
							<button>Recently Added</button>
						</li>
						<li>
							<button>People You May Know</button>
						</li>
						<li>
							<button>Followers</button>
						</li>
					</ul>
					<input type="text" placeholder="Search for friend" />
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div className="friends-list-content">
					{currentItems.map((friend, index) => {
						return <FriendsCard friend={friend} index={index} />
					})}
				</div>
				<div className="friends-list-pagination">
					<button onClick={previous} style={{ border: '2px solid black', width: '60px', alignSelf: 'center', cursor: 'pointer' }}>
						{'<'}
					</button>
					<div className="pagination-numbers-container">
						{Array.from({ length: numberOfPages }).map((item, index) => {
							return (
								<button onClick={() => goToPage(index + 1)} style={{ backgroundColor: index + 1 === currentPage ? 'lightgrey' : '' }}>
									{index + 1}
								</button>
							)
						})}
					</div>
					<button onClick={next} style={{ border: '2px solid black', width: '60px', alignSelf: 'center', cursor: 'pointer' }}>
						{'>'}
					</button>
				</div>
			</div>
		</div>
	)
}
