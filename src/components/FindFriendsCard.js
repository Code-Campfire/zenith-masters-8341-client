import { useEffect, useState } from 'react'
import '../styles/FindFriendsCard.css'
import { fetchPendingFriendRequests, fetchSendFriendRequest, fetchWithdrawFriendRequest } from '../services/friends'

export default function FindFriendsCard({ nonFriend, index }) {
	console.log(nonFriend, ' nonFriend')
	const [isActive, setIsActive] = useState(false)
	const [pendingRequests, setPendingRequests] = useState([])
	function handleAddFriend() {
		fetchSendFriendRequest(nonFriend.id).then(friendData => {
			setIsActive(true)
		})
	}
	function handleWithdraw() {
		fetchWithdrawFriendRequest(nonFriend.id).then(() => {
			setIsActive(false)
		})
	}
	useEffect(() => {
		fetchPendingFriendRequests().then(data => {
			console.log(data)
			data.forEach(potentialFriend => {
				if (potentialFriend.other_user.id === nonFriend.id) {
					setIsActive(true)
				}
			})
		})
	}, [])

	function addFriend() {}

	return (
		<div key={index} className="find-friends-card">
			<div className={`pending-request-banner ${isActive ? 'active' : ''}`}>Pending</div>
			<img className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			<div>{nonFriend.first_name.length > 20 ? nonFriend.first_name.slice(0, 20) + '...' : nonFriend.first_name}</div>
			{!isActive ? (
				<button className="button-add-friend" onClick={handleAddFriend}>
					<picture>
						<source srcset="/add-friend.svg" />
						<img alt="Friend Icon" src="/add-friend.svg" />
					</picture>
					<h6>Add Friend</h6>
				</button>
			) : (
				<button className="button-withdraw" onClick={handleWithdraw}>
					<picture>
						<source srcset="/add-friend.svg" />
						<img alt="Friend Icon" src="/add-friend.svg" />
					</picture>
					<h6>Cancel Request</h6>
				</button>
			)}
		</div>
	)
}
