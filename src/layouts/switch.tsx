import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Excercise1 from '../chapter2/excercise1';
import MainComponent from './main';

export default class SwitchComponent extends Component {
	render() {
		return (
			<Switch>
                <Route exact path='/'>
					<MainComponent />
				</Route>
				<Route path='/excercise1'>
					<Excercise1 />
				</Route>
			</Switch>
		);
	}
}
