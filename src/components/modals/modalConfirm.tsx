import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Util from '../../utils/util';

export default class ModalConfirm extends React.Component {
	util: Util = new Util();
	result: string = 'cancel';
	title: string | undefined;
	body: string | undefined;
	flag: string | undefined;
	callback: any;
	state = {
		show: false
	};
	handleClose = () => {
		this.setState({ show: false });
		if (this.util.notNullCheck(this.callback)) {
			this.callback(this.result, this.flag); // 콜백 파라미터로 result와 flag 값을 보낸다.
		}
	};
	handleShow = (title?: string, body?: string, flag?: string, callback?: any) => {
		this.setState({ show: true });
		this.title = title;
		this.body = body;
		this.flag = flag;
		this.callback = callback;
	};
	saved = () => this.result = 'confirm';
	notSaved = () => this.result = 'cancel';
	render() {
		return (
			<div>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{this.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.body}</Modal.Body>
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
							Confirm
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
