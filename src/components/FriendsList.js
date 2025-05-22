import { useEffect, useState } from 'react'
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
		{ name: 'Zelda' },
	])
	const [pagination, setPagination] = useState({
		friends: [],
		totalFriendsLength: 0,
		lastFriendIndex: 0,
		firstFriendIndex: 0,
		numberOfPages: 0,
		lastPageFriends: 0,
	})
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 10
	const numberOfPages = Math.ceil(friends.length / itemsPerPage)

	useEffect(() => {
		setPagination(() => {
			const totalFriendsLength = friends.length
			const lastFriendIndex = currentPage * itemsPerPage - 1
			const firstFriendIndex = lastFriendIndex - (itemsPerPage - 1)
			const lastPageFriends = totalFriendsLength % itemsPerPage
			const paginatedFriends = friends.filter((_, index) => {
				return index >= firstFriendIndex && index <= lastFriendIndex
			})
			console.log(paginatedFriends, ' paginated friends')
			return {
				friends: paginatedFriends,
				totalFriendsLength,
				lastFriendIndex,
				firstFriendIndex,
				numberOfPages,
				lastPageFriends,
			}
		})
		console.log(pagination, ' pagination')
	}, [currentPage])

	function goToPage(pageToGoTo) {
		setCurrentPage(pageToGoTo)
	}
	function next() {
		setCurrentPage(prev => (prev + 1 <= numberOfPages ? prev + 1 : currentPage))
	}
	function previous() {
		setCurrentPage(prev => (prev - 1 >= 1 ? prev - 1 : currentPage))
	}

	function requestFriends(pageNumber, perPage) {
		// const reponse = responseFriends(pageNumber, perPage)
	}

	return (
		<div className="friends-list-container">
			<div className="friends-list-nav">
				<div className="top-nav">
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
						<h2>Friends</h2>
					</div>
					<div className="top-nav-right">
						<label>
							<input type="text" placeholder="Search" />
						</label>
						<div style={{ padding: '12px' }}>Friend Requests</div>
						<div style={{ padding: '12px' }}>Find Friends</div>
					</div>
				</div>
				<div className="bot-nav">
					{/* <ul style={{ listStyleType: 'none' }}>
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
					</ul> */}
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div className="friends-list-content">
					{pagination.friends.map((friend, index) => {
						return <FriendsCard friend={friend} index={index} />
					})}
				</div>
				<div className="friends-list-pagination">
					<button onClick={previous} style={{ border: '2px solid black', width: '60px', alignSelf: 'center', cursor: 'pointer' }}>
						{'<'}
					</button>
					<div className="pagination-numbers-container">
						{Array.from({ length: pagination.numberOfPages }).map((item, index) => {
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
