import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleTrelloMain from '../../components/simple_trello/Simple_Trello_Main'

export default class Simple_Trello extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<SimpleTrelloMain/>
				</Router>
			</div>
		);
	}
}
