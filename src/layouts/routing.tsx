import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainComponent from './main';
import NotFound from './errors/404';
import Excercise1 from '../chapter2/excercise1';
import Excercise2 from '../chapter2/excercise2';
import Excercise3 from '../chapter2/excercise3';
import Excercise4 from '../chapter2/excercise4';
import Excercise5 from '../chapter2/excercise5';
import Excercise6 from '../chapter2/excercise6';

// https://tylermcginnis.com/react-router-route-config/
const routes = [
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '/chapter2/excercise1',
		component: Excercise1
	},
	{
		path: '/chapter2/excercise2',
		component: Excercise2
	},
	{
		path: '/chapter2/excercise3',
		component: Excercise3
	},
	{
		path: '/chapter2/excercise4',
		component: Excercise4
	},
	{
		path: '/chapter2/excercise5',
		component: Excercise5
	},
	{
		path: '/chapter2/excercise6',
		component: Excercise6
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
