import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../../layouts/errors/404';
import Trello_Basic from '../../training/trello/Trello_Basic';
import Trello_Intro from './Trello_Intro';

const trelloRoute = [
	{
		path: '/trello_try/404',
		component: NotFound
	},
	{
		path: '/trello_try/basic',
		component: Trello_Basic
	}
];

const routes = [
	{
		path: '/trello_try',
		component: Trello_Intro,
		routes: [ ...trelloRoute ]
	}
];

const RouteWithSubRoutes = (route: any) => (
	<Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
);

export default class TrelloRouting extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					{routes.map((route: any) => <RouteWithSubRoutes key={route.path} {...route} />)}
					<Route exact path='/' component={Trello_Intro} />
					<Redirect to='/404' />
				</Switch>
			</div>
		);
	}
}
