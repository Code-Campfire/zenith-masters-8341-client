import FriendCard from '../FriendCard'
import '../../../styles/FriendCard.css'
import { fetchGetAllFriends, fetchRemoveFriend } from '../../../services/friends'

export const AllFriends = ({ setPagination, createPagination, friend, index }) => {
	async function removeFriend() {
		const friendId = friend.other_user.id
		await fetchRemoveFriend(friendId)
		await fetchGetAllFriends().then(users => {
			setPagination(() => {
				const allFriends = createPagination(users)
				return allFriends
			})
		})
	}
	console.log(friend, ' friend')
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
