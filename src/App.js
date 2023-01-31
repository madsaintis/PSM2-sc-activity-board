import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Footer from './components/Footer/footer';

function App() {
	return (
		<div>

			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/login' element={<Login />} />
					<Route path='/sign-up' element={<SignUp />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
