import React from 'react';
import { Switch, Route } from 'react-router';

import '../../css/trello_basic/simple_trello/index.css';
import Header from './Header';
import BoardContainer from './board/BoardContainer';
import ShowActiveBoard from './board/activeBoard/ShowActiveBoard';
import Trello_NotFound from '../../layouts/errors/trello_404';

class Simple_Trello_Main extends React.Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/simple_trello' component={BoardContainer} />
					<Route path="/simple_trello/:id" component={ShowActiveBoard} />
					<Route component={Trello_NotFound} />
				</Switch>
			</div>
		);
	}
}

export default Simple_Trello_Main;
