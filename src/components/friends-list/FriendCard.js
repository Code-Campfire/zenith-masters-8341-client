import { useState } from 'react'
import '../../styles/FriendCard.css'
import { fetchAcceptFriendRequest } from '../../services/friends'
import { useAppContext } from '../AppContext'
import { OutgoingRequests } from './sub-components/OutgoingRequests'
import { FindFriends } from './sub-components/FindFriends'
import { IncomingRequests } from './sub-components/IncomingRequests'
import { AllFriends } from './sub-components/AllFriends'

export default function FriendCard({ children, friend, index }) {
	// const [isLoading, setIsLoading] = useState(false)
	// const { loggedInUser } = useAppContext()

	// function handleAcceptRequest() {
	// 	fetchAcceptFriendRequest(friend.other_user.id)
	// }
	// function handleRemoveFriend() {
	// 	fetchAcceptFriendRequest(friend.other_user.id)
	// }
	const isActive = () => {
		return friend?.simpery?.status === 'pending' || friend.status === 'pending'
	}
	console.log(friend, ' FRIEND FROM FRIENDCARD')
	return (
		<div key={index} className="find-friends-card" onClick={() => console.log(friend, ' friend')}>
			<div className={`pending-request-banner ${isActive() ? 'active' : ''}`}>Pending</div>
			<img className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			{friend?.first_name ? <div>{friend?.first_name?.length > 20 ? friend?.first_name.slice(0, 20) + '...' : friend?.first_name}</div> : <div>{friend?.other_user?.first_name.length > 20 ? friend?.other_user?.first_name.slice(0, 20) + '...' : friend?.other_user?.first_name}</div>}
			{children}
		</div>
	)
}
