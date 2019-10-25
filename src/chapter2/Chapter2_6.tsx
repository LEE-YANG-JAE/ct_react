import React from 'react';
import { Card, Form, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import AlertComponent from '../components/alerts/AlertComponent';
import Util from '../utils/util';
import ModalAlert from '../components/modals/ModalAlert';

export default class Chapter2_6 extends React.Component {
	// 전역 변수
	private util: Util = new Util();
	private child: any;
	private modalAlert: any;

	constructor(props: any) {
		super(props);
		this.child = React.createRef();
		this.modalAlert = React.createRef();
	}

	state = {
		currentAge: '',
		retireAge: '',
		result: ''
	};

	// 입력 변화
	inputChange = (e: any) => {
		if (e.target.validity.valid) {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	// 키 다운 이벤트
	inputKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			this.makeResult();
		}
	};

	// 내용 입력 후 결과
	makeResult = () => {
		if (this.util.notNullCheck(this.state.currentAge) && this.util.notNullCheck(this.state.retireAge)) {
			const date = new Date();
			const currentAge: number = parseInt(this.state.currentAge);
			const retireAge: number = parseInt(this.state.retireAge);
			const yearCheck: number = retireAge - currentAge;
			if (yearCheck < 0) {
				this.modalAlert.current.handleShow('Excercise6', 'You should input retire age bigger than current Age');
				this.setState({ result: '' });
				return;
			}
			let resultString = `You have ${yearCheck} years left until you can retire.\n`;
			resultString += `It's ${date.getFullYear()}, so you can retire in ${date.getFullYear() + yearCheck}.`;
			this.setState({ result: resultString });
		} else {
			this.modalAlert.current.handleShow('Excercise6', 'You should input current age or retire age.');
		}
	};

	// 초기화
	clearContents = () => {
		this.setState({
			currentAge: '',
			retireAge: '',
			result: ''
		});
	};

	// View
	render() {
		return (
			<div>
				<ModalAlert ref={this.modalAlert} />
				<AlertComponent ref={this.child} />
				<div className='container'>
					<br />
					<Card>
						<Card.Header>챕터2 - 입력, 프로세싱, 출력</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 6. 퇴직 계산기</Card.Title>
							<Card.Text>
								정년까지 몇 년 남았는지, 퇴직하는 해는 몇 년이 되는지를 계산하는 프로그램.
								<br />현재 나이와 퇴직하고자 하는 나이를 입력 받는다.
							</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
						<Form>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									What is your current age?
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='currentAge'
										name='currentAge'
										className='form-control'
										value={this.state.currentAge}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
							{this.state.currentAge ? (
								<Form.Group as={Row}>
									<Form.Label column sm='4'>
										At what age would you like to retire?
									</Form.Label>
									<Col sm='8'>
										<input
											type='text'
											id='retireAge'
											name='retireAge'
											className='form-control'
											value={this.state.retireAge}
											onChange={this.inputChange}
											onKeyDown={this.inputKeyDown}
											pattern='[0-9]*'
										/>
									</Col>
								</Form.Group>
							) : (
								<div />
							)}
						</Form>
						<div style={{ width: '150px', margin: 'auto' }}>
							<ButtonToolbar>
								<Button variant='primary' onClick={this.makeResult}>
									입력
								</Button>&nbsp;
								<Button variant='danger' onClick={this.clearContents}>
									초기화
								</Button>
							</ButtonToolbar>
						</div>
						<br />
						<Form.Group controlId='result'>
							<Form.Label>결과</Form.Label>
							<textarea
								id='result'
								name='result'
								rows={2}
								className='form-control'
								disabled
								value={this.state.result}
								onChange={this.inputChange}
								style={{ resize: 'none' }}
							/>
						</Form.Group>
					</div>
				</div>
			</div>
		);
	}
}
