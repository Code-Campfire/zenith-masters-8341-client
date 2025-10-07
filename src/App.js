import { Routes, Route } from 'react-router-dom'
import Home from './components/HomePage/Home/Home.js'
import './App.css'
import AppLayout from './components/App/AppLayout/AppLayout.js'
import Settings from './components/Settings'
import NotFound from './components/GlobalComponents/NotFound/NotFound.js'
import Login from './components/Auth/Login/Login.js'
import { AuthorizedRoute } from './components/Auth/AuthorizedRoute/AuthorizedRoute.js'
import Register from './components/Auth/Register/Register.js'
import FriendsList from './components/FriendsList/FriendsList/FriendsList.js'
import AccountPage from './components/UserProfile/AccountPage/AccountPage.js'

import MarketPlace from './components/MarketPlace/MarketPlace.jsx'
import ListingDetails from './components/MarketPlace/ListingDetails.jsx'
import SellingComponent from './components/MarketPlace/SellingComponent/SellingComponent.jsx'
import { ImageGallery } from './components/UserProfile/ImageGallery/ImageGallery.js'

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

				{/* Selling page */}
				<Route
					path="selling"
					element={
						<AuthorizedRoute>
							<SellingComponent />
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
								<ImageGallery />
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
				{/* MARKETPLACE BELOW */}

				<Route path="marketplace">
					<Route
						index
						element={
							<AuthorizedRoute>
								<MarketPlace />
							</AuthorizedRoute>
						}
					/>
				</Route>

				<Route path="/details/:id" element={<ListingDetails />} />

				{/* MARKETPLACE ABOVE */}

				<Route path="posts">
					<Route
						index
						element={
							<AuthorizedRoute>
								<div>Posts Go Here</div>
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
