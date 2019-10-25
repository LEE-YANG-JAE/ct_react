import React from 'react';
import { Card, Form, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import '../css/common.css';
import Util from '../utils/util';

export default class Chapter3_1 extends React.Component {
	
	/** 클래스내 전역 변수 영역 **/
	private util: Util = new Util();
	private form: any;
	private PI: number = 0.09290304;

	/** 생성자 **/
	constructor(props: any) {
		super(props);
		this.form = React.createRef();
	}

	/** 상태 영역 **/
	state = {
		length: '',
		width: '',
		result: '',
		result2: '',
		chooseType: 'feet'
	};

	/** 이벤트 리스너 영역 **/
	// 입력 변화
	inputChange = (e: any) => {
		if (e.target.validity.valid) {
			this.setState({ [e.target.name]: e.target.value });
			const f = this.util.getAllFormValues(this.form.current);
			if (this.util.notNullCheck(f.width) && this.util.notNullCheck(f.length)) {
				this.makeResult2();
			}
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
		const f = this.util.getAllFormValues(this.form.current);
		if (this.util.notNullCheck(f.width) && this.util.notNullCheck(f.length)) {
			const width = parseInt(this.state.width);
			const length = parseInt(this.state.length);
			const squre = width * length;
			let result;
			if (f.chooseType === 'feet') {
				const squreMeter = (squre * this.PI).toFixed(3);
				result = `You entered dimensions of ${width} feet by ${length} feet\n`;
				result += `The area is\n${squre} square feet\n${squreMeter} square meters.`;
			} else {
				const squreFeet = (squre / this.PI).toFixed(3);
				result = `You entered dimensions of ${width} meter by ${length} meter\n`;
				result += `The area is\n${squre} square meter\n${squreFeet} square feet.`;
			}
			this.setState({ result: result });
		}
	};

	// 내용 입력 후 결과
	makeResult2 = () => {
		const f = this.util.getAllFormValues(this.form.current);
		if (this.util.notNullCheck(f.width) && this.util.notNullCheck(f.length)) {
			const width = parseInt(f.width);
			const length = parseInt(f.length);
			const squre = width * length;
			let result;
			if (f.chooseType === 'feet') {
				const squreMeter = (squre * this.PI).toFixed(3);
				result = `You entered dimensions of ${width} feet by ${length} feet\n`;
				result += `The area is\n${squre} square feet\n${squreMeter} square meters.`;
			} else {
				const squreFeet = (squre / this.PI).toFixed(3);
				result = `You entered dimensions of ${width} meter by ${length} meter\n`;
				result += `The area is\n${squre} square meter\n${squreFeet} square feet.`;
			}
			this.setState({ result2: result });
		}
	};

	// 선택창 변경 이벤트
	selectChange = (e: any) => {
		if (this.state.chooseType !== e.target.value) {
			const value = e.target.value;
			this.setState({ chooseType: value });
			this.makeResult2();
		}
	};

	// 초기화 버튼 클릭시
	clearContents = () => {
		this.setState({
			length: '',
			width: '',
			result: '',
			result2: ''
		});
	};


	/** View **/
	render() {
		return (
			<div>
				<div className='container'>
					<br />
					<Card>
						<Card.Header>챕터3 - 연산</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 7. 직사각형 방의 면적</Card.Title>
							<Card.Text>
								방의 면적을 계산하는 프로그램 <br />
								방의 길이와 폭을 피트 단위로 입력 받은 다음 제곱피트와 제곱미터로 면적이 나타남.
							</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<div className='exForm'>
						<Form ref={this.form}>
							<Form.Group controlId='chooseType' className='exSelect'>
								<Form.Label>Choose the type you want.</Form.Label>
								<Form.Control as='select' onChange={this.selectChange} name='chooseType'>
									<option value='feet'>Feet</option>
									<option value='meter'>Meter</option>
								</Form.Control>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									{this.state.chooseType === 'feet' ? (
										<div>
											What is the <strong>length</strong> of the room <br />in feet?
										</div>
									) : (
										<div>
											What is the <strong>width</strong> of the room <br />in meter?
										</div>
									)}
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='length'
										name='length'
										className='form-control'
										value={this.state.length}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									{this.state.chooseType === 'feet' ? (
										<div>
											What is the <strong>length</strong> of the room <br />in feet?
										</div>
									) : (
										<div>
											What is the <strong>width</strong> of the room <br />in meter?
										</div>
									)}
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='width'
										name='width'
										className='form-control'
										value={this.state.width}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
						</Form>
						<div className='exButton'>
							<ButtonToolbar>
								<Button variant='primary' onClick={this.makeResult}>
									입력
								</Button>&nbsp;
								<Button variant='danger' onClick={this.clearContents}>
									초기화
								</Button>
							</ButtonToolbar>
							<br />
						</div>
						<Form.Group controlId='result'>
							<Form.Label>결과</Form.Label>
							<textarea
								id='result'
								name='result'
								rows={4}
								className='form-control'
								disabled
								value={this.state.result}
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
								style={{ resize: 'none' }}
							/>
						</Form.Group>
					</div>
				</div>
			</div>
		);
	}
}
