import { handleAcceptRequest } from '../../../utils/friendHandlers'
import FriendCard from '../FriendCard'

export const IncomingRequests = ({ friend, createPagination, setPagination }) => {
	// function handleAcceptRequest() {
	// 	fetchAcceptFriendRequest(friend.other_user.id)
	// }
	return (
		<FriendCard friend={friend}>
			<button className="button-accept-request" onClick={() => handleAcceptRequest(friend, setPagination, createPagination)}>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" />
				</picture>
				<h6 style={{ marginRight: '20px' }}>Accept</h6>
			</button>
		</FriendCard>
	)
}
