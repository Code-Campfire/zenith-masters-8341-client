import { fetchAcceptFriendRequest, fetchAllIncomingFriendRequests, fetchAllOutgoingFriendRequests, fetchGetAllFriends, fetchRemoveFriend, fetchSendFriendRequest, fetchWithdrawFriendRequest } from '../services/friends'
import { fetchGetAllUsersAndRelationships } from '../services/users'

export const handleWithdrawRequest = async (friend, setPagination, createPagination) => {
	console.log(friend)
	await fetchWithdrawFriendRequest(friend.id)
	await fetchGetAllUsersAndRelationships().then(users => {
		const filteredUsers = users.filter(user => user?.simpery?.status !== 'accepted')
		console.log(filteredUsers, ' users with relationships')
		setPagination(() => {
			const allUsers = createPagination(filteredUsers)
			return allUsers
		})
	})
}

export const handleAcceptRequest = async (friend, setPagination, createPagination) => {
	await fetchAcceptFriendRequest(friend.other_user.id)
	await fetchAllIncomingFriendRequests().then(users => {
		setPagination(() => {
			const allUsers = createPagination(users)
			return allUsers
		})
	})
}

export const handleAddFriend = async (friend, loggedInUser, setPagination, createPagination) => {
	if (loggedInUser.id === friend.id) {
		return console.log("Can't friend yourself")
	}
	await fetchSendFriendRequest(friend.id)
	await fetchGetAllUsersAndRelationships().then(users => {
		const filteredUsers = users.filter(user => user?.simpery?.status !== 'accepted')
		console.log(filteredUsers, ' users with relationships')
		setPagination(() => {
			const allUsers = createPagination(filteredUsers)
			return allUsers
		})
	})
}

async function removeFriend(friend, setPagination, createPagination) {
	const friendId = friend.other_user.id
	await fetchRemoveFriend(friendId)
	await fetchGetAllFriends().then(users => {
		setPagination(() => {
			const allFriends = createPagination(users)
			return allFriends
		})
	})
}
