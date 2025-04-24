import '../styles/FriendsCard.css'

export default function FriendsCard({ friend, index }) {
	return (
		<div key={index} className="friends-card">
			<img src="https://upload.wikimedia.org/wikipedia/en/archive/b/b1/20210811082420%21Portrait_placeholder.png" alt="" />
			<div>{friend.name}</div>
			<button>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" style={{ width: '30px', height: '25px' }} />
				</picture>
				<h6>Add Friend</h6>
			</button>
		</div>
	)
}
