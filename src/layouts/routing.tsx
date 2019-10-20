import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainComponent from './main';
import NotFound from './errors/404';
import Excercise1 from '../chapter2/excercise1';
import Excercise2 from '../chapter2/excercise2';
import Excercise3 from '../chapter2/excercise3';
import Excercise4 from '../chapter2/excercise4';

// https://tylermcginnis.com/react-router-route-config/
const routes = [
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '/excercise1',
		component: Excercise1
	},
	{
		path: '/excercise2',
		component: Excercise2
	},
	{
		path: '/excercise3',
		component: Excercise3
	},
	{
		path: '/excercise4',
		component: Excercise4
	}
];

const RouteWithSubRoutes = (route: any) => (
	<Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
);
export default class RoutingComponent extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={MainComponent} />
				{routes.map((route: any) => <RouteWithSubRoutes key={route.path} {...route} />)}
				<Redirect to='/404' />
			</Switch>
		);
	}
}
