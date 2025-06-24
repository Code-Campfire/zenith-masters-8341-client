import { useAppContext } from '../../AppContext'
import { handleAddFriend, handleWithdrawRequest } from '../../../utils/friendHandlers'
import FriendCard from '../FriendCard'
import '../../../styles/FriendCard.css'

export const FindFriends = ({ friend, setPagination, createPagination, view }) => {
	const { loggedInUser } = useAppContext()

	return (
		<FriendCard friend={friend}>
			{friend?.simpery?.status === 'pending' ? (
				<button className="button-withdraw" onClick={() => handleWithdrawRequest(friend, setPagination, createPagination)}>
					<picture>
						<source srcset="/add-friend.svg" />
						<img alt="Friend Icon" src="/add-friend.svg" />
					</picture>
					<h6>Withdraw Request</h6>
				</button>
			) : (
				<button className="button-add-friend" onClick={() => handleAddFriend(friend, loggedInUser, setPagination, createPagination)}>
					<picture>
						<source srcset="/add-friend.svg" />
						<img alt="Friend Icon" src="/add-friend.svg" />
					</picture>
					<h6 style={{ marginRight: '18px' }}>Add Friend</h6>
				</button>
			)}
		</FriendCard>
	)
}
