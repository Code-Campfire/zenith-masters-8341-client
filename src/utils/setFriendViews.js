import { fetchApiGet, getUrls } from '../services/fetchApiGet'

export const setFindFriends = async () => {
	const users = await fetchApiGet('/bookface/users/AndRelationships/')
	const filteredUsers = users.filter(user => user?.simpery?.status !== 'accepted')
	return filteredUsers
}

export const setIncomingRequests = async () => {
	const users = await fetchApiGet('/bookface/simps/pending_relationships/')
	const filteredUsers = users.filter(user => user.direction === 'incoming')
	return filteredUsers
}

export const setOutgoingRequests = async () => {
	const users = await fetchApiGet('/bookface/simps/pending_relationships/')
	const filteredUsers = users.filter(user => user.direction === 'outgoing')
	return filteredUsers
}

export const setAllFriends = async () => {
	const users = await fetchApiGet(getUrls.friends)
	return users
}
