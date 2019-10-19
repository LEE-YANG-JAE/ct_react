import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Excercise1 from '../chapter2/excercise1';
import MainComponent from './main';
import NotFound from './errors/404';

export default class RoutingComponent extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={MainComponent} />
				<Route path='/excercise1' component={Excercise1} />
				<Route path='/404' component={NotFound} />
				<Redirect to='/404' />
			</Switch>
		);
	}
}
