import React from 'react';
import { Link, Route } from 'react-router-dom';

type Prop = {
	routes: any;
};

const RouteWithSubRoutes = (route: any) => (
	<Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
);

export default class Trello_Intro extends React.Component<Prop> {
	private routes: any;
	constructor(props: any) {
		super(props);
		this.routes = props.routes;
	}

	render() {
		return (
			<div>
				Hello World2
				<br />
				<Link to='/trello_try/404'>404</Link>&nbsp;
				<Link to='/trello_try/basic'>basic</Link>
				{this.routes.map((route: any) => <RouteWithSubRoutes key={route.path} {...route} />)}
			</div>
		);
	}
}
