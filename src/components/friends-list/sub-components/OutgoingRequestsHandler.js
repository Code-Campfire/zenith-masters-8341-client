import { fetchAllFriendsPending, fetchWithdrawFriendRequest } from '../../../services/friends'

export const OutgoingRequests = ({ setPagination, createPagination, friend, index }) => {
	console.log(friend, ' card withdraw request')

	async function handleWithdrawRequest() {
		console.log(friend)
		await fetchWithdrawFriendRequest(friend.other_user.id)
		await fetchAllFriendsPending().then(users => {
			setPagination(() => {
				const pendingUsers = createPagination(users)
				return pendingUsers
			})
		})
	}
	return (
		<div key={index} className="find-friends-card">
			<div className={`pending-request-banner ${friend?.simpery?.status === 'pending' ? 'active' : ''}`}>Pending</div>
			<img className="user-image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010" alt="" />
			{friend?.first_name ? <div>{friend?.first_name?.length > 20 ? friend?.first_name.slice(0, 20) + '...' : friend?.first_name}</div> : <div>{friend?.other_user?.first_name.length > 20 ? friend?.other_user?.first_name.slice(0, 20) + '...' : friend?.other_user?.first_name}</div>}
			<button className="button-withdraw" onClick={handleWithdrawRequest}>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" />
				</picture>
				<h6>Withdraw Request</h6>
			</button>
		</div>
	)
}
