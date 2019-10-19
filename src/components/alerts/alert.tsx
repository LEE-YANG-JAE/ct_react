import React from 'react';
import { Alert } from 'react-bootstrap';

export default class AlertComponent extends React.Component {
	variant: string | undefined;
	message: string | undefined;
	state = {
		show: false
	};

	alertMessage(variant?: string, message?: string) {
		this.variant = variant;
		this.message = message;
		this.setState({ show: true });
		setTimeout(() => this.setState({ show: false }), 2000);
	}
	render() {
		return (
			<div>
				{(this.variant === 'error') ? (
					<Alert variant={'danger'} show={this.state.show}>
						{this.message}
					</Alert>
				) : (
					<Alert variant={'primary'} show={this.state.show}>
						{this.message}
					</Alert>
				)}
			</div>
		);
	}
}
