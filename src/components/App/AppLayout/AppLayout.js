import { Outlet } from 'react-router-dom'
import NavigationBar from '../../NavBar/NavigationBar/NavigationBar'
import './AppLayout.css'

export default function AppLayout() {
	return (
		<div className="layout-wrapper">
			<NavigationBar />
			<div className="under-navbar">
				<div className="main-content">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
