import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './layouts/Routing';
import NavbarComp from './layouts/Navbar';

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<NavbarComp />
				<Routing />
			</Router>
		</div>
	);
};

export default App;
