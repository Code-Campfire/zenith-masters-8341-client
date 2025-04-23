import { useState } from 'react'
import '../styles/FriendsList.css'
import FriendsCard from './FriendsCard'

export default function FriendsList() {
	const [friends, setFriends] = useState([
		{ name: 'Jake' },
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
					<div>Friends</div>
					<div>Suggested Friends</div>
				</div>
				<div className="bot-nav">
					<div>All Friends</div>
					<div>Recently Added</div>
					<div>People You May Know</div>
					<div>Followers</div>
					<div>Search Bar</div>
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div className="friends-list-content">
					{currentItems.map((friend, index) => {
						return <FriendsCard friend={friend} index={index} />
					})}
				</div>
				<div className="friends-list-pagination">
					<div onClick={next} style={{ border: '2px solid black', width: '60px', alignSelf: 'center', cursor: 'pointer' }}>
						Next
					</div>
					<div className="pagination-numbers-container">
						{Array.from({ length: numberOfPages }).map((item, index) => {
							return (
								<div onClick={() => goToPage(index + 1)} style={{ border: '2px solid grey', width: '40px', cursor: 'pointer' }}>
									{index + 1}
								</div>
							)
						})}
					</div>
					<div onClick={previous} style={{ border: '2px solid black', width: '80px', alignSelf: 'center', cursor: 'pointer' }}>
						Previous
					</div>
				</div>
			</div>
		</div>
	)
}
