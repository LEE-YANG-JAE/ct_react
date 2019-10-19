import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Util from '../../utils/util';

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
export default class ModalAlertComponent extends React.Component<Param> {
	util: Util = new Util();
	result: string = 'cancel';
	state = {
		show: false
	};
	handleClose = () => {
		this.setState({ show: false });
		if( this.util.notNullCheck(this.props.callback)){
			this.props.callback();
		}
	};
	handleShow = () => this.setState({ show: true });
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
							variant='primary'
							onClick={() => {
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