import '../../styles/FriendCard.css'

export default function FriendCard({ children, friend, index }) {
	const isActive = () => {
		return friend?.simpery?.status === 'pending' || friend.status === 'pending'
	}
	return (
		<div key={index} className="find-friends-card" onClick={() => console.log(friend, ' friend')}>
			<div className={`pending-request-banner ${isActive() ? 'active' : ''}`}>Pending</div>
			<img className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			{friend?.first_name ? <div>{friend?.first_name?.length > 20 ? friend?.first_name.slice(0, 20) + '...' : friend?.first_name}</div> : <div>{friend?.other_user?.first_name.length > 20 ? friend?.other_user?.first_name.slice(0, 20) + '...' : friend?.other_user?.first_name}</div>}
			{children}
		</div>
	)
}
