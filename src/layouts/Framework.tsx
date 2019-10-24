import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';
import NavbarCompnent from './Navbar';
import { store } from '../redux/store';

class Framework extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			shown: false
		};
	}
	render() {
		const shown: any = store.getState().loginReducer.loginInfo.logined;
		return (
			<div>
				<Router>
					{shown ? <NavbarCompnent /> : <div />}
					<Routing />
				</Router>
			</div>
		);
	}
}

export default Framework;
