import React from 'react';
import { Card, Form, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import AlertComponent from '../components/alerts/alert';
import Util from '../utils/util';

export default class Excercise4 extends React.Component {
	// 전역 변수
	private util: Util = new Util();
	private child: any;
	private form: any;

	constructor(props: any) {
		super(props);
		this.child = React.createRef();
		this.form = React.createRef();
	}

	// 상태
	state = {
		noun: '',
		verb: '',
		adverb: '',
		adjective: '',
		adjective2: '',
		result: ''
	};

	// 입력 변화
	inputChange = (e?: any) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// 키 다운 이벤트
	inputKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	// 내용 입력 후 결과
	makeResult = () => {
		const f: any = this.util.getAllFormValues(this.form.current);
		if (this.validationCheck(f) === false) {
			return;
		}
		let resultString = '';
		if (f.noun === 'dog') {
			resultString = `Do you ${f.verb} your ${f.adjective} ${f.noun} ${f.adverb}? That' hilarious! ${f.adjective2} ${f.noun}!`;
		} else if (f.noun === 'cat') {
			resultString = `Do you ${f.verb} your ${f.adjective} ${f.noun} ${f.adverb}? Is that possible? ${f.adjective2} ${f.noun}!`;
		} else {
			resultString = `Do you ${f.verb} my ${f.adjective} ${f.noun} ${f.adverb}? What a wonderful world! ${f.adjective2} ${f.noun}!`;
		}

		this.setState({ result: resultString });
	};

	// 입력값 검증
	validationCheck(form: any): boolean {
		if (!this.util.notNullCheck(form.noun)) {
			this.child.current.alertMessage('danger', `noun is null.`);
			return false;
		} else if (!this.util.notNullCheck(form.verb)) {
			this.child.current.alertMessage('danger', `verb is null.`);
			return false;
		} else if (!this.util.notNullCheck(form.adjective)) {
			this.child.current.alertMessage('danger', `adjective is null.`);
			return false;
		} else if (!this.util.notNullCheck(form.adverb)) {
			this.child.current.alertMessage('danger', `adverb is null.`);
			return false;
		} else if (!this.util.notNullCheck(form.adjective2)) {
			this.child.current.alertMessage('danger', `adjective2 is null.`);
			return false;
		}
		return true;
	}
	// 초기화
	clearContents = () => {
		this.setState({
			noun: '',
			verb: '',
			adverb: '',
			adjective: '',
			adjective2: '',
			result: ''
		});
	};

	// View
	render() {
		return (
			<div>
				<AlertComponent ref={this.child} />
				<div className='container'>
					<br />
					<Card>
						<Card.Header>챕터2 - 입력, 프로세싱, 출력</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 4. Mad Libs</Card.Title>
							<Card.Text>명사, 동사, 형용사, 부사에 해당되는 단어를 입력 받은 후 완성된 이야기를 만들기</Card.Text>
						</Card.Body>
					</Card>
					<br />
					<div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
						<Form ref={this.form}>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									Enter a noun:
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='noun'
										name='noun'
										className='form-control'
										value={this.state.noun}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									Enter a verb:
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='verb'
										name='verb'
										className='form-control'
										value={this.state.verb}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									Enter a adjective:
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='adjective'
										name='adjective'
										className='form-control'
										value={this.state.adjective}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									Enter a adverb:
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='adverb'
										name='adverb'
										className='form-control'
										value={this.state.adverb}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm='4'>
									Enter a adverb2:
								</Form.Label>
								<Col sm='8'>
									<input
										type='text'
										id='adjective2'
										name='adjective2'
										className='form-control'
										value={this.state.adjective2}
										onChange={this.inputChange}
										onKeyDown={this.inputKeyDown}
									/>
								</Col>
							</Form.Group>
						</Form>
						<ButtonToolbar style={{ float: 'right' }}>
							<Button variant='primary' onClick={this.makeResult}>
								입력
							</Button>&nbsp;
							<Button variant='danger' onClick={this.clearContents}>
								초기화
							</Button>
						</ButtonToolbar>
						<br />
						<br />
						<Form.Group controlId='result'>
							<Form.Label>결과창</Form.Label>
							<textarea
								id='result'
								name='result'
								rows={2}
								className='form-control'
								value={this.state.result}
								onChange={this.inputChange}
								style={{ resize: 'none' }}
								disabled
							/>
						</Form.Group>
					</div>
				</div>
			</div>
		);
	}
}
