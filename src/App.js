<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './styles/App.css'
import AppLayout from './components/AppLayout'
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import Login from './components/Login'
import SignUp from './components/SignUp'
import SavedPosts from './components/SavedPosts'

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
>>>>>>> d1ff3089f71f23fdd4a6a249723c901e007f9cc7
