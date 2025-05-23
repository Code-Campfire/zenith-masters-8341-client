import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import NavigationBar from './NavigationBar'
import '../styles/AppLayout.css'
import { useAppContext } from './AppContext'

export default function AppLayout() {
	const { loggedInUser } = useAppContext()
	return (
		<div className="layout-wrapper">
			<NavigationBar />
			<div className="under-navbar">
				{loggedInUser && <SideBar />}
				<div className="main-content">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
