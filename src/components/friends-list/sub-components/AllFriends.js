import { fetchRemoveFriend } from '../../../services/friends'
import { fetchApiGet, getUrls } from '../../../services/fetchApiGet'
import FriendCard from '../FriendCard'
import '../../../styles/FriendCard.css'

export const AllFriends = ({ setPagination, createPagination, friend, index }) => {
	async function removeFriend() {
		const friendId = friend.other_user.id
		await fetchRemoveFriend(friendId)
		await fetchApiGet(getUrls.friends).then(users => {
			setPagination(() => {
				const allFriends = createPagination(users)
				return allFriends
			})
		})
	}
	return (
		<FriendCard friend={friend}>
			<button className="button-add-friend" onClick={removeFriend}>
				<picture>
					<source srcset="/add-friend.svg" />
					<img alt="Friend Icon" src="/add-friend.svg" />
				</picture>
				<h6>Remove Friend</h6>
			</button>
		</FriendCard>
	)
}
