import React from 'react';
import { Card, Form, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import Util from '../utils/util';
import AlertComponent from '../components/alerts/AlertComponent';
import PizzaCheckPopup from '../components/popup/PizzaCheckPopup';

export default class Chapter3_2 extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private util: Util = new Util();
	private alert: any;
	private secondInput: any;
	private thirdInput: any;

	/** 생성자 **/
	constructor(props: any) {
		super(props);
		this.alert = React.createRef();
		this.secondInput = React.createRef();
		this.thirdInput = React.createRef();
	}

	/** 상태 영역 **/
	state = {
		people: '',
		pizza: '',
		piece: '',
		result: '',
		popupShow: 'none'
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
			if (parseInt(this.state.people) > 0 && parseInt(this.state.pizza) > 0 && parseInt(this.state.piece) > 0) {
				this.makeResult();
			} else if (parseInt(this.state.people) > 0 && parseInt(this.state.pizza) > 0) {
				this.thirdInput.current.focus();
			} else if (parseInt(this.state.people) > 0) {
				this.secondInput.current.focus();
			}
		}
	};

	// 내용 입력 후 결과
	makeResult = () => {
		if (
			this.util.notNullCheck(this.state.people) &&
			this.util.notNullCheck(this.state.pizza) &&
			this.util.notNullCheck(this.state.piece)
		) {
			const people: number = parseInt(this.state.people);
			const pizza: number = parseInt(this.state.pizza);
			const piece: number = parseInt(this.state.piece);
			const totalPices: number = pizza * piece;
			const perPizza: number = Math.round(totalPices / people);
			const leftOver: number = totalPices % people;
			if (totalPices < people) {
				this.alert.current.alertMessage('warning', 'People number should be not over total pieces of pizza.');
				return;
			}

			let message = `${people} people with ${perPizza} pizzas\n`;
			perPizza % 2 === 0
				? (message += `Each person gets ${perPizza} pieces of pizza.\n`)
				: (message += `Each person gets ${perPizza} piece of pizza.\n`);
			leftOver > 2
				? (message += `There are ${leftOver} leftover pieces.`)
				: (message += `There is ${leftOver} leftover piece.`);
			this.setState({ result: message });
		}
	};

	openPopup = () => {
		this.setState({ popupShow: 'block' });
	};

	closePopup = () => {
		this.setState({ popupShow: 'none' });
	}

	pizzaCnt = (value: any) => {
		const message = `You should buy ${value} pizzas with 8 pieces to eat.`;
		this.setState({ result: message });
	}

	// 초기화 버튼 클릭시
	clearContents = () => {
		this.setState({
			people: '',
			pizza: '',
			piece: '',
			result: ''
		});
	};

	/** View **/
	render() {
		return (
			<div>
				<AlertComponent ref={this.alert} />
				{this.state.popupShow === 'block' && (
					<PizzaCheckPopup functionTest={this.pizzaCnt} popupShow={this.closePopup}/>
				)}
				<div className='container'>
					<br />
					<Card>
						<Card.Header>챕터3 - 연산</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 8. 피자 파티</Card.Title>
							<Card.Text>
								피자를 정확하게 나누는 프로그램.<br />
								사람 수, 피자 개수, 조각 개수를 입력 받는데, 이때 조각 개수는 짝수여야 한다.<br />
								일단 한 사람이 받게 되는 피자 조각 개수를 출력. 그리고 남는 조각이 있다면 그 개수도 나타냄.
							</Card.Text>
						</Card.Body>
					</Card>
					<br/>
					<ButtonToolbar className='exForm__buttonToolBar'>
						<Button variant='secondary' onClick={this.openPopup}>
							피자 적당 조각 갯수 세기
						</Button>
					</ButtonToolbar>
					<br />
					<div className='exForm'>
						<Form>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									<div>
										How many <strong>people</strong>?
									</div>
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='people'
										name='people'
										className='form-control'
										value={this.state.people}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
										pattern='[0-9]*'
									/>
								</Col>
							</Form.Group>
							{parseInt(this.state.people) > 0 ? (
								<Form.Group as={Row}>
									<Form.Label column sm='4'>
										<div>
											How many <strong>pizzas</strong> do you have?
										</div>
									</Form.Label>
									<Col sm='8'>
										<input
											type='text'
											id='pizza'
											name='pizza'
											className='form-control'
											value={this.state.pizza}
											onChange={this.inputChange}
											onKeyDown={this.inputKeyDown}
											pattern='[0-9]*'
											ref={this.secondInput}
										/>
									</Col>
								</Form.Group>
							) : (
								<div />
							)}
							{parseInt(this.state.pizza) > 0 ? (
								<Form.Group as={Row}>
									<Form.Label column sm='4'>
										<div>
											How many <strong>pieces</strong> are in a pizza?
										</div>
									</Form.Label>
									<Col sm='8'>
										<input
											type='text'
											id='piece'
											name='piece'
											className='form-control'
											value={this.state.piece}
											onChange={this.inputChange}
											onKeyDown={this.inputKeyDown}
											pattern='[0-9]*'
											ref={this.thirdInput}
										/>
									</Col>
								</Form.Group>
							) : (
								<div />
							)}
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
