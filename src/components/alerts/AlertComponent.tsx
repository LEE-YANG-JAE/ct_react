import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertComponent extends React.Component {
	variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined;
	message: string | undefined;
	state = {
		show: false
	};

	alertMessage(
		variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined,
		message?: string
	) {
		this.variant = variant;
		this.message = message;
		this.setState({ show: true });
		setTimeout(() => this.setState({ show: false }), 5000);
	}
	render() {
		return (
			<div>
				<Alert variant={this.variant} show={this.state.show}>
					{this.message}
				</Alert>
			</div>
		);
	}
}
