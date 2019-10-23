import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './Main';
import NotFound from './errors/404';
import Chapter2_1 from '../chapter2/Chapter2_1';
import Chapter2_2 from '../chapter2/Chapter2_2';
import Chapter2_3 from '../chapter2/Chapter2_3';
import Chapter2_4 from '../chapter2/Chapter2_4';
import Chapter2_5 from '../chapter2/Chapter2_5';
import Chapter2_6 from '../chapter2/Chapter2_6';
import Chapter3_1 from '../chapter3/Chapter3_1';
import Login from './Login';

// https://tylermcginnis.com/react-router-route-config/
const routes = [
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '/chapter2/excercise1',
		component: Chapter2_1
	},
	{
		path: '/chapter2/excercise2',
		component: Chapter2_2
	},
	{
		path: '/chapter2/excercise3',
		component: Chapter2_3
	},
	{
		path: '/chapter2/excercise4',
		component: Chapter2_4
	},
	{
		path: '/chapter2/excercise5',
		component: Chapter2_5
	},
	{
		path: '/chapter2/excercise6',
		component: Chapter2_6
	},
	{
		path: '/chapter3/excercise1',
		component: Chapter3_1
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/main',
		component: Main
	}
];

const RouteWithSubRoutes = (route: any) => (
	<Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
);

export default class Routing extends React.Component {
	render() {
		return (
			<Switch>
				{routes.map((route: any) => <RouteWithSubRoutes key={route.path} {...route} />)}
				<Route exact path='/' component={Login} /> 
				<Redirect to='/404' />
			</Switch>
		);
	}
}
