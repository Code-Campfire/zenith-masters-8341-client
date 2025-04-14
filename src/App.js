import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './styles/App.css'
import AppLayout from './components/AppLayout'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import Login from './components/Login'
import SavedPosts from './components/SavedPosts'
import SignUp from './components/SignUp'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="settings" element={<Settings />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/posts">
						<Route index element={<div>Posts Go Here</div>} />
						<Route path="saved" element={<SavedPosts />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	)
}
