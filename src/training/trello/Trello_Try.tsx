import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TrelloRouting from '../../components/trello/Trello_Routing';

export default class Trello_Try extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<TrelloRouting />
				</Router>
			</div>
		);
	}
}
