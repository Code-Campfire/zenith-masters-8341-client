import '../styles/FriendsCard.css'

export default function FriendsCard({ friend, index }) {
	return (
		<div key={index} className="friends-card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			<div>{friend.first_name.length > 20 ? friend.first_name.slice(0, 20) + '...' : friend.first_name}</div>
			<button>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" />
				</picture>
				<h6>Message</h6>
			</button>
		</div>
	)
}
