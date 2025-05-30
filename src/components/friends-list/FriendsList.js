import { useEffect, useState } from 'react'
import '../../styles/FriendsList.css'
import { fetchGetAllUsers, fetchGetAllUsersAndRelationships } from '../../services/users'
import FriendCard from './FriendCard'
import { useAppContext } from '../AppContext'
import { fetchAllFriendsPending, fetchAllIncomingFriendRequests, fetchGetAllFriends } from '../../services/friends'
import { AllFriends } from './sub-components/AllFriends'
import { FindFriends } from './sub-components/FindFriends'
import { IncomingRequests } from './sub-components/IncomingRequests'
import { OutgoingRequests } from './sub-components/OutgoingRequests'

export default function FriendsList() {
	const { loggedInUser } = useAppContext()
	const [currentPage, setCurrentPage] = useState(1)
	const [pagination, setPagination] = useState({
		friends: [],
		totalFriendsLength: 0,
		lastFriendIndex: 0,
		firstFriendIndex: 0,
		lastPageFriends: 0,
		numberOfPages: 0,
	})
	const [view, setView] = useState({
		allFriends: false,
		findFriends: false,
		incomingRequests: false,
		outgoingRequests: false,
	})
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
		setCurrentPage(1)
		setPagination(prev => ({
			...prev,
			friends: [],
		}))
		setView(prev => {
			const newView = {}
			for (const prop in prev) {
				if (prop === e.target.dataset.name) {
					newView[prop] = true
				} else {
					newView[prop] = false
				}
			}
			return newView
		})
	}
	function createPagination(users) {
		const itemsPerPage = 10
		const numberOfPages = Math.ceil(users?.length / itemsPerPage)
		const totalFriendsLength = users?.length
		const lastFriendIndex = currentPage * itemsPerPage - 1
		const firstFriendIndex = lastFriendIndex - (itemsPerPage - 1)
		const lastPageFriends = totalFriendsLength % itemsPerPage
		const friends = users.slice(firstFriendIndex, lastFriendIndex + 1)
		//Values needed to be retreived from the backend
		return {
			friends,
			totalFriendsLength,
			lastFriendIndex,
			firstFriendIndex,
			lastPageFriends,
			numberOfPages,
		}
	}

	useEffect(() => {
		if (view.findFriends) {
			fetchGetAllUsersAndRelationships().then(users => {
				console.log(users, ' users with relationships')
				setPagination(() => {
					const allUsers = createPagination(users)
					return allUsers
				})
			})
		}
		if (view.incomingRequests) {
			fetchAllIncomingFriendRequests().then(users => {
				setPagination(() => {
					const allUsers = createPagination(users)
					return allUsers
				})
			})
		}
		if (view.outgoingRequests) {
			fetchAllFriendsPending().then(users => {
				setPagination(() => {
					const pendingUsers = createPagination(users)
					return pendingUsers
				})
			})
		}
		if (view.allFriends) {
			fetchGetAllFriends().then(users => {
				setPagination(() => {
					const pendingUsers = createPagination(users)
					return pendingUsers
				})
			})
		}
		console.log(view, 'VIEW OR CURRENT PAGE CHANGED')
		console.log(view, 'VIEW OR CURRENT PAGE CHANGED')
		console.log(view, 'VIEW OR CURRENT PAGE CHANGED')
		console.log(view, 'VIEW OR CURRENT PAGE CHANGED')
	}, [view, currentPage])

	return (
		<div className="friends-list-container">
			<div className="friends-list-nav">
				<div className="top-nav">
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
						<h2>Friends</h2>
					</div>
					<div className="top-nav-right">
						<input type="text" placeholder="Search" />
						<button className="word-button" data-name="incomingRequests" onClick={handleFriendBar}>
							Incoming Requests
						</button>
						<button className="word-button" data-name="allFriends" onClick={handleFriendBar}>
							All Friends
						</button>
						<button className="word-button" data-name="outgoingRequests" onClick={handleFriendBar}>
							Outgoing Requests
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
						if (view.findFriends) return <FindFriends key={friend.id} friend={friend} index={index} currentPage={currentPage} tab={view} createPagination={createPagination} setPagination={setPagination} view={view} />
						if (view.allFriends) return <AllFriends key={friend.id} friend={friend} index={index} currentPage={currentPage} tab={view} createPagination={createPagination} setPagination={setPagination} view={view} />
						if (view.incomingRequests) return <IncomingRequests key={friend.id} friend={friend} index={index} currentPage={currentPage} tab={view} createPagination={createPagination} setPagination={setPagination} view={view} />
						if (view.outgoingRequests) return <OutgoingRequests key={friend.id} friend={friend} index={index} currentPage={currentPage} tab={view} createPagination={createPagination} setPagination={setPagination} view={view} />
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
