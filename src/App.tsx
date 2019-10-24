import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './layouts/Routing';
import NavbarComp from './layouts/Navbar';

class App extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			shown: false
		};
	}
	render() {
		const loginInfo = JSON.parse(localStorage.getItem('loginStore') as any);
		const shown : any = loginInfo.logined;
		return (
			<div>
				<Router>
					{shown ? <NavbarComp /> : <div></div> }
					<Routing />
				</Router>
			</div>
		);
	}
}

export default App;
