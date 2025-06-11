import { fetchApiGet, getUrls } from '../services/apiGet'
import { fetchAcceptFriendRequest, fetchSendFriendRequest, fetchWithdrawFriendRequest } from '../services/friends'
import { setIncomingRequests } from './setFriendViews'

export const handleWithdrawRequest = async (friend, setPagination, createPagination) => {
	await fetchWithdrawFriendRequest(friend.id)
	await fetchApiGet(getUrls.usersWithRelationships).then(users => {
		const filteredUsers = users.filter(user => user?.simpery?.status !== 'accepted')
		setPagination(() => {
			const allUsers = createPagination(filteredUsers)
			return allUsers
		})
	})
}

export const handleAcceptRequest = async (friend, setPagination, createPagination) => {
	await fetchAcceptFriendRequest(friend.other_user.id)
	await setIncomingRequests().then(users => {
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
	await fetchApiGet(getUrls.usersWithRelationships).then(users => {
		const filteredUsers = users.filter(user => user?.simpery?.status !== 'accepted')
		setPagination(() => {
			const allUsers = createPagination(filteredUsers)
			return allUsers
		})
	})
}
