import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Param {
	title?: string;
	body?: string;
	callback?: any;
}
export default class ModalComponent extends React.Component<Param> {
	result: any = 'not';
	state = {
		show: false
	};
	handleClose = () => {
		this.setState({ show: false });
		this.props.callback(this.result);
	};
	handleShow = () => this.setState({ show: true });
	saved = () => (this.result = 'save');
	notSaved = () => (this.result = 'not');
	render() {
		return (
			<div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.props.body}</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={() => {
								this.notSaved();
								this.handleClose();
							}}
						>
							Close
						</Button>
						<Button
							variant='primary'
							onClick={() => {
								this.saved();
								this.handleClose();
							}}
						>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
