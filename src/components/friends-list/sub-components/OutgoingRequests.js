import { fetchApiGet, getUrls } from '../../../services/apiGet'
import { fetchWithdrawFriendRequest } from '../../../services/friends'
import FriendCard from '../FriendCard'

export const OutgoingRequests = ({ setPagination, createPagination, friend, index }) => {
	async function handleWithdrawRequest() {
		await fetchWithdrawFriendRequest(friend.other_user.id)
		await fetchApiGet(getUrls.pendingRelationships).then(users => {
			setPagination(() => {
				const pendingUsers = createPagination(users)
				return pendingUsers
			})
		})
	}
	return (
		<FriendCard friend={friend}>
			<button className="button-withdraw" onClick={handleWithdrawRequest}>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" />
				</picture>
				<h6>Withdraw Request</h6>
			</button>
		</FriendCard>
	)
}
