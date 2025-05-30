import FriendCard from '../FriendCard'
import '../../../styles/FriendCard.css'

export const AllFriends = ({ handler, friend, index }) => {
	console.log(friend, ' friend')
	return (
		<FriendCard friend={friend}>
			{true ? (
				<button className="button-add-friend" onClick={handler}>
					<picture>
						<source srcset="/add-friend.svg" />
						<img alt="Friend Icon" src="/add-friend.svg" />
					</picture>
					<h6>Add Friend</h6>
				</button>
			) : (
				<button className="button-add-friend">
					<picture>
						<source srcset="/add-friend.svg" />
						<img alt="Friend Icon" src="/add-friend.svg" />
					</picture>
					<h6>Withdraw Request</h6>
				</button>
			)}
		</FriendCard>
	)
}
