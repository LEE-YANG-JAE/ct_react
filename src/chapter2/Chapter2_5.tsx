import React from 'react';
import { Card, Form, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Util from '../utils/util';

export default class Chapter2_5 extends React.Component {
	// 전역 변수
	private util: Util = new Util();
	private form: any;

	constructor(props: any) {
		super(props);
		this.form = React.createRef();
	}

	// 상태
	state = {
		first: '',
		second: '',
		result: '',
		result2: ''
	};

	// 입력 변화
	inputChange = (e: any) => {
		if(e.target.validity.valid) {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	// 키 다운 이벤트
	inputKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			this.makeResult();
		}
		this.makeResult2();
	};

	// 내용 입력 후 결과
	makeResult = () => {
		if (this.util.notNullCheck(this.state.first) && this.util.notNullCheck(this.state.second)) {
			const first: number = parseInt(this.state.first);
			const second: number = parseInt(this.state.second);
			let resultString: string = this.calcualtation(first, second);
			this.setState({ result: resultString });
		}
	};

	// 내용 입력 후 실시간 결과
	makeResult2 = () => {
		if (this.util.notNullCheck(this.state.first) && this.util.notNullCheck(this.state.second)) {
			const first: number = parseInt(this.state.first);
			const second: number = parseInt(this.state.second);
			let resultString: string = this.calcualtation(first, second);
			this.setState({ result2: resultString });
		}
	};

	calcualtation(first: number, second: number): string {
		let resultString: string = `${first} + ${second} = ${first + second}\n`;
		resultString += `${first} - ${second} = ${first - second}\n`;
		resultString += `${first} * ${second} = ${first * second}\n`;
		resultString += `${first} / ${second} = ${first / second}\n`;
		return resultString;
	}

	// 초기화
	clearContents = () => {
		this.setState({
			first: '',
			second: '',
			result: '',
			result2: ''
		});
	};

	// View
	render() {
		return (
			<div>
				<div className='container'>
					<br />
					<Card>
						<Card.Header>챕터2 - 입력, 프로세싱, 출력</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 5. 간단한 수학</Card.Title>
							<Card.Text>두개의 숫자를 입력 받은 후, 두 숫자를 이용한 사칙연산 결과를 출력</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
						<Form ref={this.form}>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									What is the first number?
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='first'
										name='first'
										className='form-control'
										value={this.state.first}
										onChange={this.inputChange}
										onKeyUp={this.inputKeyDown}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									What is the second number?
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='second'
										name='second'
										className='form-control'
										value={this.state.second}
										onChange={this.inputChange}
										onKeyUp={this.inputKeyDown}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
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
								rows={4}
								className='form-control'
								disabled
								value={this.state.result}
								onChange={this.inputChange}
								style={{ resize: 'none' }}
							/>
						</Form.Group>
						<br />
						<Form.Group controlId='result'>
							<Form.Label>실시간 결과</Form.Label>
							<textarea
								id='result2'
								name='result2'
								rows={4}
								className='form-control'
								disabled
								value={this.state.result2}
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
