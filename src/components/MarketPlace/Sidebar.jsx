import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

// Icons for default, unselected states
import selectedBrowseAllIcon from './pictures/selected/sel-browse-all.png'
import selectedNotificationsIcon from './pictures/selected/sel-notifications.png'
import selectedInboxIcon from './pictures/selected/sel-inbox.png'
import selectedBuyingIcon from './pictures/selected/sel-buying.png'
import selectedSellingIcon from './pictures/selected/sel-selling.png'

// Icons for selected states
import unselectedBrowseAllIcon from './pictures/unselected/unsel-browse-all.png'
import unselectedNotificationsIcon from './pictures/unselected/unsel-notifications.png'
import unselectedInboxIcon from './pictures/unselected/unsel-inbox.png'
import unselectedBuyingIcon from './pictures/unselected/unsel-buying.png'
import unselectedSellingIcon from './pictures/unselected/unsel-selling.png'

const Sidebar = () => {
	const [selectedItem, setSelectedItem] = useState(null)
	const navigate = useNavigate()
	const facebookBlue = '#1877f2'

	const handleItemClick = (item, path) => {
		setSelectedItem(item)
		navigate(path)
	}

	return (
		<div className="sidebar">
			<h2>Marketplace</h2>
			<input type="text" placeholder="Search Marketplace" className="search-bar" />
			<ul>
				<li
					onClick={() => handleItemClick('Browse All', '/marketplace')}
					style={{
						color: selectedItem === 'Browse All' ? facebookBlue : 'black',
						cursor: 'pointer',
					}}
				>
					{selectedItem === 'Browse All' ? <img src={selectedBrowseAllIcon} alt="Selected" /> : <img src={unselectedBrowseAllIcon} alt="Unselected" />}
					Browse All
				</li>
				<li
					onClick={() => handleItemClick('Notifications', '/notifications')}
					style={{
						color: selectedItem === 'Notifications' ? facebookBlue : 'black',
						cursor: 'pointer',
					}}
				>
					{selectedItem === 'Notifications' ? <img src={selectedNotificationsIcon} alt="Selected" /> : <img src={unselectedNotificationsIcon} alt="Unselected" />}
					Notifications
				</li>
				<li
					onClick={() => handleItemClick('Inbox', '/inbox')}
					style={{
						color: selectedItem === 'Inbox' ? facebookBlue : 'black',
						cursor: 'pointer',
					}}
				>
					{selectedItem === 'Inbox' ? <img src={selectedInboxIcon} alt="Selected" /> : <img src={unselectedInboxIcon} alt="Unselected" />}
					Inbox
				</li>
				<li
					onClick={() => handleItemClick('Buying', '/buying')}
					style={{
						color: selectedItem === 'Buying' ? facebookBlue : 'black',
						cursor: 'pointer',
					}}
				>
					{selectedItem === 'Buying' ? <img src={selectedBuyingIcon} alt="Selected" /> : <img src={unselectedBuyingIcon} alt="Unselected" />}
					Buying
				</li>
				<li
					onClick={() => handleItemClick('Selling', '/selling')}
					style={{
						color: selectedItem === 'Selling' ? facebookBlue : 'black',
						cursor: 'pointer',
					}}
				>
					{selectedItem === 'Selling' ? <img src={selectedSellingIcon} alt="Selected" /> : <img src={unselectedSellingIcon} alt="Unselected" />}
					Selling
				</li>
			</ul>
			<button className="create-listing-btn">+ Create New Listing</button>
			<button className="create-mult-listing-btn">Create multiple listings</button>
		</div>
	)
}

export default Sidebar
