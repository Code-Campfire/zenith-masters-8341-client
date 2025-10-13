import './FriendCard.css'

export default function FriendCard({ children, friend, index }) {
	console.log(friend, ' friend')
	const username = friend.username ? friend.username : friend?.other_user?.username
	const isActive = () => {
		return friend?.simpery?.status === 'pending' || friend.status === 'pending'
	}
	return (
		<div key={index} className="find-friends-card" onClick={() => console.log(friend, ' friend')}>
			<div className={`pending-request-banner ${isActive() ? 'active' : ''}`}>Pending</div>
			<img className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			{<div>{username}</div>}
			{children}
		</div>
	)
}
