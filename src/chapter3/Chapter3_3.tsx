import React from 'react';
import { Card, Form, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import Util from '../utils/util';

export default class Chapter3_3 extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private util: Util = new Util();

	/** 생성자 **/
	constructor(props: any) {
		super(props);
		console.log(props);
	}

	/** 상태 영역 **/
	state = {
		width: '',
		height: '',
		result: ''
	};

	/** 이벤트 리스너 영역 **/
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
		const width: number = parseInt(this.state.width);
		const height: number = parseInt(this.state.height);
		const liters: number = Math.round(width * height / 9);
		const litersAvg: number = (width * height) % 9;
		let finalLiter: number;
		console.log(liters, litersAvg);
		if (litersAvg === 0) {
			finalLiter = liters;
		} else if (liters >= litersAvg) {
			finalLiter = liters + 1;
		} else {
			finalLiter = liters;
			if (finalLiter < 1) {
				finalLiter += 1;
			}
		}
		const resultString = `You will need to purchase ${finalLiter} litters of\npaint to cover ${width *
			height} square meters.`;
		this.setState({ result: resultString });
	};

	// 초기화 버튼 클릭시
	clearContents = () => {
		this.setState({
			width: '',
			height: '',
			result: ''
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
							<Card.Title>연습문제 9. 페인트 계산기</Card.Title>
							<Card.Text>
								천장을 칠하는 데 필요한 페인트 양을 구하는 프로그램.<br />
								길이와 폭을 입력 받은 다음, 1리터에 9m2 를 칠한다고 가정하여 계산한다.<br />
								그리고 천장을 칠하는 데 필요한 페인트 양을 정수로 표현
							</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<div className='exForm'>
						<Form>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									<div>
										<strong>Width</strong>?
									</div>
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
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									<div>
										<strong>Height</strong>?
									</div>
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='height'
										name='height'
										className='form-control'
										value={this.state.height}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
						</Form>
						<ButtonToolbar className='exForm__buttonToolBar'>
							<Button variant='primary' onClick={this.makeResult}>
								입력
							</Button>&nbsp;
							<Button variant='danger' onClick={this.clearContents}>
								초기화
							</Button>
						</ButtonToolbar>
						<br />
						<Form.Group controlId='result'>
							<Form.Label>결과</Form.Label>
							<textarea
								id='result'
								name='result'
								rows={4}
								className='form-control exForm__textarea--noresize'
								disabled
								value={this.state.result}
							/>
						</Form.Group>
					</div>
				</div>
			</div>
		);
	}
}
