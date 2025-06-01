import { fetchAllOutgoingFriendRequests, fetchSendFriendRequest, fetchWithdrawFriendRequest } from '../../../services/friends'
import { fetchGetAllUsersAndRelationships } from '../../../services/users'
import { useAppContext } from '../../AppContext'
import '../../../styles/FriendCard.css'
import FriendCard from '../FriendCard'
import { handleAddFriend, handleWithdrawRequest } from '../../../utils/friendHandlers'

export const FindFriends = ({ friend, setPagination, createPagination, view }) => {
	console.log(friend)
	const { loggedInUser } = useAppContext()

	// async function handleAddFriend() {
	// 	if (loggedInUser.id === friend.id) {
	// 		return console.log("Can't friend yourself")
	// 	}
	// 	await fetchSendFriendRequest(friend.id)
	// 	await fetchGetAllUsersAndRelationships().then(users => {
	// 		setPagination(() => {
	// 			const allUsers = createPagination(users)
	// 			return allUsers
	// 		})
	// 	})
	// }

	// async function handleWithdrawRequest() {
	// 	console.log(friend)

	// 	await fetchWithdrawFriendRequest(friend.id)
	// 	await fetchGetAllUsersAndRelationships().then(users => {
	// 		setPagination(() => {
	// 			const pendingUsers = createPagination(users)
	// 			return pendingUsers
	// 		})
	// 	})
	// }

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
					<h6>Add Friend</h6>
				</button>
			)}
		</FriendCard>
	)
}
