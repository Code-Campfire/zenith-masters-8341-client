import { useEffect, useState } from 'react'
import '../styles/FriendsList.css'
import FriendsCard from './FriendsCard'
import { fetchGetAllUsers } from '../services/users'
import FindFriendsCard from './FindFriendsCard'

export default function FriendsList() {
	const [pagination, setPagination] = useState({
		friends: [],
		totalFriendsLength: 0,
		lastFriendIndex: 0,
		firstFriendIndex: 0,
		lastPageFriends: 0,
		numberOfPages: 0,
	})
	const [currentPage, setCurrentPage] = useState(1)
	const [view, setView] = useState({
		findFriends: false,
		friendRequests: false,
		allFriends: false,
	})

	useEffect(() => {
		setView(prev => ({
			...prev,
			findFriends: true,
		}))
		fetchGetAllUsers().then(users => {
			console.log(users)
			setPagination(() => {
				const itemsPerPage = 10
				const numberOfPages = Math.ceil(users.length / itemsPerPage)
				const totalFriendsLength = users.length
				const lastFriendIndex = currentPage * itemsPerPage - 1
				const firstFriendIndex = lastFriendIndex - (itemsPerPage - 1)
				const lastPageFriends = totalFriendsLength % itemsPerPage
				const paginatedFriends = users.slice(firstFriendIndex, lastFriendIndex + 1)
				console.log(firstFriendIndex, 'first friend index')
				console.log(lastFriendIndex, 'last friend index')
				console.log(paginatedFriends, ' paginated friends')

				//Values needed to be retreived from the backend
				return {
					friends: paginatedFriends,
					totalFriendsLength,
					lastFriendIndex,
					firstFriendIndex,
					lastPageFriends,
					numberOfPages,
				}
			})
		})
	}, [currentPage])

	//
	function goToPage(pageToGoTo) {
		setCurrentPage(pageToGoTo)
	}
	function next() {
		setCurrentPage(prev => (prev + 1 <= pagination.numberOfPages ? prev + 1 : currentPage))
	}
	function previous() {
		setCurrentPage(prev => (prev - 1 >= 1 ? prev - 1 : currentPage))
	}
	function handleFriendBar(e) {
		setView(prev => {
			const newView = {}
			for (const prop in prev) {
				console.log(prev)
				if (prop === e.target.dataset.name) {
					newView[prop] = true
				} else {
					newView[prop] = false
				}
			}
			console.log(newView)
			return newView
		})
	}

	return (
		<div className="friends-list-container">
			<div className="friends-list-nav">
				<div className="top-nav">
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
						<h2>Friends</h2>
					</div>
					<div className="top-nav-right">
						<input type="text" placeholder="Search" />
						<button className="word-button" data-name="allFriends" onClick={handleFriendBar}>
							All Friends
						</button>
						<button className="word-button" data-name="friendRequests" onClick={handleFriendBar}>
							Friend Requests
						</button>
						<button className="word-button" data-name="findFriends" onClick={handleFriendBar} style={{ border: 'none', backgroundColor: 'transparent', color: '' }}>
							Find Friends
						</button>
					</div>
				</div>
				<div className="bot-nav"></div>
			</div>
			<div id="friends-anchor" />
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div id="friends-list-content" className="friends-list-content">
					{pagination.friends.map((friend, index) => {
						return view?.findFriends ? <FindFriendsCard nonFriend={friend} index={index} /> : view?.friendRequests ? 'Friend Requests Placeholder' : view?.allFriends ? 'All Friends Placeholder' : 'Loading...'
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
