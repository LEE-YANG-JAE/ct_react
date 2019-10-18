import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './layouts/navbar';
import SwitchComponent from './layouts/switch';

const App: React.FC = () => {
	return (
		<div>
			<Router>
				<NavbarComponent />
				<SwitchComponent />
			</Router>
		</div>
	);
};

export default App;
