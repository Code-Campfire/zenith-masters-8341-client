import { fetchAllIncomingFriendRequests, fetchAllOutgoingFriendRequests, fetchGetAllFriends } from '../services/friends'
import { fetchGetAllUsersAndRelationships } from '../services/users'

export const setFindFriends = async (createPagination, setPagination) => {
	const users = await fetchGetAllUsersAndRelationships()
	console.log(users, ' unfiltered users')
	const filteredUsers = users.filter(user => user?.simpery?.status !== 'accepted')
	console.log(filteredUsers, ' filtered users')
	setPagination(() => {
		const allUsers = createPagination(filteredUsers)
		return allUsers
	})
}

export const setIncomingRequests = async (createPagination, setPagination) => {
	const users = await fetchAllIncomingFriendRequests()
	const filteredUsers = users.filter(user => user.direction === 'incoming')
	console.log(filteredUsers)
	setPagination(() => {
		const allUsers = createPagination(filteredUsers)
		return allUsers
	})
}

export const setOutgoingRequests = async (createPagination, setPagination) => {
	const users = await fetchAllOutgoingFriendRequests()
	const filteredUsers = users.filter(user => user.direction === 'outgoing')
	setPagination(() => {
		const pendingUsers = createPagination(filteredUsers)
		return pendingUsers
	})
}

export const setAllFriends = async (createPagination, setPagination) => {
	const users = await fetchGetAllFriends()
	setPagination(() => {
		const pendingUsers = createPagination(users)
		return pendingUsers
	})
}
