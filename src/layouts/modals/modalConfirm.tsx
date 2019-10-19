import React from 'react';
import { Modal, Button } from 'react-bootstrap';

/**
 * @param title 모달 제목
 * @param body 모달 바디의 내용
 * @param callback 모달 종료 후 콜백 호출
 */
interface Param {
	title?: string;
	body?: string;
	callback?: any;
}
export default class ModalConfirmComponent extends React.Component<Param> {
	result: string = 'not';
	state = {
		show: false
	};
	handleClose = () => {
		this.setState({ show: false });
		this.props.callback(this.result); // 파라미터로 result 값을 보낸다.
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
