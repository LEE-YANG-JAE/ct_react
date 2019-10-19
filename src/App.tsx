import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './layouts/navbar';
import RoutingComponent from './layouts/routing';

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<NavbarComponent />
				<RoutingComponent />
			</Router>
		</div>
	);
};

export default App;
