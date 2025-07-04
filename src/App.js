import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './styles/App.css'
import AppLayout from './components/AppLayout'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import Login from './components/Login'
import SavedPosts from './components/SavedPosts'
import AccountPage from './pages/AccountPage'
import { AuthorizedRoute } from './components/auth/AuthorizedRoute'
import Register from './components/Register'
import FriendsList from './components/friends-list/FriendsList'

export default function App() {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="/" element={<AppLayout />}>
				<Route
					index
					element={
						<AuthorizedRoute>
							<Home />
						</AuthorizedRoute>
					}
				/>
				<Route
					path="settings"
					element={
						<AuthorizedRoute>
							<Settings />
						</AuthorizedRoute>
					}
				/>
				<Route
					path="account"
					element={
						<AuthorizedRoute>
							<AccountPage />
						</AuthorizedRoute>
					}
				>
					<Route
						path="friends"
						element={
							<AuthorizedRoute>
								<FriendsList />
							</AuthorizedRoute>
						}
					/>
					<Route
						path="about"
						element={
							<AuthorizedRoute>
								<NotFound />
							</AuthorizedRoute>
						}
					/>
					<Route
						path="posts"
						element={
							<AuthorizedRoute>
								<NotFound />
							</AuthorizedRoute>
						}
					/>
				</Route>
				<Route
					path="account"
					element={
						<AuthorizedRoute>
							<AccountPage />
						</AuthorizedRoute>
					}
				/>
				<Route path="posts">
					<Route
						index
						element={
							<AuthorizedRoute>
								<div>Posts Go Here</div>
							</AuthorizedRoute>
						}
					/>
					<Route
						path="saved"
						element={
							<AuthorizedRoute>
								<SavedPosts />
							</AuthorizedRoute>
						}
					/>
				</Route>
				<Route
					path="*"
					element={
						<AuthorizedRoute>
							<NotFound />
						</AuthorizedRoute>
					}
				/>
			</Route>
		</Routes>
	)
}
