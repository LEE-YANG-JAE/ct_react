import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { store } from '../redux/store';
import Main from './Main';
import Login from './Login';
import NotFound from './errors/404';
import Chapter2_1 from '../coding_training/chapter2/Chapter2_1';
import Chapter2_2 from '../coding_training/chapter2/Chapter2_2';
import Chapter2_3 from '../coding_training/chapter2/Chapter2_3';
import Chapter2_4 from '../coding_training/chapter2/Chapter2_4';
import Chapter2_5 from '../coding_training/chapter2/Chapter2_5';
import Chapter2_6 from '../coding_training/chapter2/Chapter2_6';
import Chapter3_1 from '../coding_training/chapter3/Chapter3_1';
import Chapter3_2 from '../coding_training/chapter3/Chapter3_2';
import Chapter3_3 from '../coding_training/chapter3/Chapter3_3';
import Trello_Basic from '../training/trello/Trello_Basic';
import Drag_And_Drop from '../training/trello/Drag_And_Drop';
import Card_Arrange from '../training/trello/Card_Arrange';
import To_Do_App from '../training/trello/To_Do_App';
import Simple_Tetris from '../training/tetris/Simple_Tetris';
import GridTest from '../sysmgmt/GridTest';
import JavascriptDrumKit from '../javascript30/day01/javascriptDrumKit';
import Clock from '../javascript30/day02/Clock';
import ScopedCss from '../javascript30/day03/ScopedCss';
import ArrayCardio from '../javascript30/day04/ArrayCardio';

// https://tylermcginnis.com/react-router-route-config/
const routes = [
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '/main',
		component: Main
	},
	{
		path: '/trello_basic',
		component: Trello_Basic
	},
	{
		path: '/drag_and_drop',
		component: Drag_And_Drop
	},
	{
		path: '/card_arrange',
		component: Card_Arrange
	},
	{
		path: '/to_do_basic',
		component: To_Do_App
	},
	{
		path :'/simple_tetris',
		component: Simple_Tetris
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
		path: '/chapter3/excercise2',
		component: Chapter3_2
	},
	{
		path: '/chapter3/excercise3',
		component: Chapter3_3
	},
	{
		path: '/sysmgmt/gridTest',
		component: GridTest
	},
	{
		path : '/javascript30/day01',
		component : JavascriptDrumKit
	},
	{
		path : '/javascript30/day02',
		component : Clock
	},
	{
		path : '/javascript30/day03',
		component : ScopedCss
	},
	{
		path : '/javascript30/day04',
		component : ArrayCardio
	},
	
];

const routesWithNoLogin = [
	{
		path: '/login',
		component: Login
	},
	{
		path: '/404',
		component: NotFound
	},
]

const RouteWithSubRoutes = (route: any) => (
	<Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
);

export default class Routing extends React.Component {
	render() {
		const shown: any = store.getState().loginReducer.loginInfo.logined;
		return (
			<div>
				{shown ? (
					<Switch>
						{routes.map((route: any) => <RouteWithSubRoutes key={route.path} {...route} />)}
						<Route exact path='/' component={Main} />
						<Redirect to='/404' />
					</Switch>
				) : (
					<Switch>
						{routesWithNoLogin.map((route: any) => <RouteWithSubRoutes key={route.path} {...route} />)}
						<Route exact path='/' component={Login} />
						<Redirect to='/404' />
					</Switch>
				)}
			</div>
		);
	}
}
