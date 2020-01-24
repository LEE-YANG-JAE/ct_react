import React from 'react';
import { Switch, Route } from 'react-router';

import '../../css/trello_basic/simple_trello/index.css';
import Header from './Header';
import NotFound from '../../layouts/errors/404';
import BoardContainer from './board/BoardContainer';

class Simple_Trello_Main extends React.Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/simple_trello' component={BoardContainer} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default Simple_Trello_Main;
