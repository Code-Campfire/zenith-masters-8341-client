import { useEffect, useRef, useState } from 'react'
import { AllFriends } from './sub-components/AllFriends'
import { FindFriends } from './sub-components/FindFriends'
import { IncomingRequests } from './sub-components/IncomingRequests'
import { OutgoingRequests } from './sub-components/OutgoingRequests'
import { setAllFriends, setFindFriends, setIncomingRequests, setOutgoingRequests } from '../../utils/setFriendViews'
import { useAppContext } from '../AppContext'
import { CgSpinner } from 'react-icons/cg'
import '../../styles/FriendsList.css'

export default function FriendsList() {
	const friendsRef = useRef(null)
	const { loading, setLoading } = useAppContext()

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
		findFriends: true,
		incomingRequests: false,
		outgoingRequests: false,
	})
	useEffect(() => {
		if (friendsRef.current) friendsRef.current.scrollIntoView({ behavior: 'smooth' })
	}, [view])

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
		setLoading(true)
		setCurrentPage(1)
		setPagination({
			friends: [],
			totalFriendsLength: 0,
			lastFriendIndex: 0,
			firstFriendIndex: 0,
			lastPageFriends: 0,
			numberOfPages: 0,
		})
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
		setLoading(false)
	}
	function createPagination(users) {
		const itemsPerPage = 10
		const numberOfPages = Math.ceil(users?.length / itemsPerPage)
		const totalFriendsLength = users?.length
		const lastFriendIndex = currentPage * itemsPerPage - 1
		const firstFriendIndex = lastFriendIndex - (itemsPerPage - 1)
		const lastPageFriends = totalFriendsLength % itemsPerPage
		const friends = users.slice(firstFriendIndex, lastFriendIndex + 1)
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
		const setViews = async () => {
			if (view.findFriends) {
				const findFriendsUsers = await setFindFriends()
				const newPagination = createPagination(findFriendsUsers)
				setPagination(newPagination)
			} else if (view.incomingRequests) {
				const incomingRequestUsers = await setIncomingRequests()
				const newPagination = createPagination(incomingRequestUsers)
				setPagination(newPagination)
			} else if (view.outgoingRequests) {
				const outgoingRequestUsers = await setOutgoingRequests()
				const newPagination = createPagination(outgoingRequestUsers)
				setPagination(newPagination)
			} else if (view.allFriends) {
				const allFriendsUsers = await setAllFriends()
				const newPagination = createPagination(allFriendsUsers)
				setPagination(newPagination)
			}
		}
		setViews()
	}, [view, currentPage])

	return (
		<>
			{!loading ? (
				<div className="friends-list-container">
					<div className="friends-list-nav">
						<div className="top-nav">
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
								<h2>Friends</h2>
							</div>
							<div className="top-nav-right">
								<input type="text" placeholder="Search" />
								<button className={`word-button ${view.incomingRequests ? 'active' : ''}`} data-name="incomingRequests" onClick={handleFriendBar}>
									Incoming Requests
								</button>
								<button className={`word-button ${view.allFriends ? 'active' : ''}`} data-name="allFriends" onClick={handleFriendBar}>
									All Friends
								</button>
								<button className={`word-button ${view.outgoingRequests ? 'active' : ''}`} data-name="outgoingRequests" onClick={handleFriendBar}>
									Outgoing Requests
								</button>
								<button className={`word-button ${view.findFriends ? 'active' : ''}`} data-name="findFriends" onClick={handleFriendBar}>
									Find Friends
								</button>
							</div>
						</div>
						<div className="bot-nav"></div>
					</div>
					<div ref={friendsRef} id="friends-anchor" />
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div id="friends-list-content" className="friends-list-content">
							{pagination?.friends?.map((friend, _) => {
								if (view.findFriends) return <FindFriends key={friend.id} friend={friend} createPagination={createPagination} setPagination={setPagination} />
								if (view.allFriends) return <AllFriends key={friend.id} friend={friend} createPagination={createPagination} setPagination={setPagination} />
								if (view.incomingRequests) return <IncomingRequests key={friend.id} friend={friend} createPagination={createPagination} setPagination={setPagination} />
								if (view.outgoingRequests) return <OutgoingRequests key={friend.id} friend={friend} createPagination={createPagination} setPagination={setPagination} />
							})}
						</div>
						<div className="friends-list-pagination">
							<button className="pagination-arrow" onClick={previous}>
								{'<'}
							</button>
							<div className="pagination-numbers-container">
								{Array.from({ length: pagination.numberOfPages }).map((item, index) => {
									return (
										<button className="pagination-number" onClick={() => goToPage(index + 1)} style={{ backgroundColor: index + 1 === currentPage ? 'lightgrey' : '' }}>
											{index + 1}
										</button>
									)
								})}
							</div>
							<button className="pagination-arrow" onClick={next}>
								{'>'}
							</button>
						</div>
					</div>
				</div>
			) : (
				<CgSpinner />
			)}
		</>
	)
}
