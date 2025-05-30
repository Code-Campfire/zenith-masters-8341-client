import FriendCard from '../FriendCard'

export const IncomingRequests = ({ handleAcceptRequest, friend, index }) => {
	return (
		<FriendCard friend={friend}>
			<button className="button-accept-request" onClick={handleAcceptRequest}>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" />
				</picture>
				<h6>Accept</h6>
			</button>
		</FriendCard>
	)
}
