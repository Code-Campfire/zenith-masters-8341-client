import '../styles/UserProfile.css'
import FriendsList from './FriendsList'

export default function UserProfile() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }}>
			<div className="user-profile-container" style={{ border: '4px solid pink' }}>
				<div className="user-profile-main">
					<div className="banner">Banner Background</div>
					<div className="banner-nav">Banner Nav</div>
					<div className="banner-profile-picture">Profile Picture</div>
					<div className="user-profile-children">
						<FriendsList />
					</div>
				</div>
				{/*CHILDREN*/}
			</div>
		</div>
	)
}
