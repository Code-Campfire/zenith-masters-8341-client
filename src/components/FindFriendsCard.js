import { useState } from 'react'
import '../styles/FindFriendsCard.css'
import { fetchSendFriendRequest, fetchWithdrawFriendRequest } from '../services/friends'

export default function FindFriendsCard({ friend, index }) {
	const [isActive, setIsActive] = useState(false)
	function handleAddFriend() {
		fetchSendFriendRequest(friend.id).then(() => {
			setIsActive(true)
		})
		console.log(friend)
	}
	function handleWithdraw() {
		fetchWithdrawFriendRequest(friend.id).then(() => {
			setIsActive(false)
		})
	}

	function addFriend() {}

	return (
		<div key={index} className="find-friends-card">
			<div className={`pending-request-banner ${isActive ? 'active' : ''}`}>Pending</div>
			<img className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			<div>{friend.first_name.length > 20 ? friend.first_name.slice(0, 20) + '...' : friend.first_name}</div>
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
