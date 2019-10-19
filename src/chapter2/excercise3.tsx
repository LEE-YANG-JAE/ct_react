import React from 'react';
import { Card } from 'react-bootstrap';
import AlertComponent from '../components/alerts/alert';
import Util from '../utils/util';

export default class Excercise3 extends React.Component {
	// 전역 변수
	private child: any; // 우선적으로 선언으로 만들어져 있어야 동작을 함
	private util: Util = new Util();
	// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
	constructor(props: any) {
		super(props);
		this.child = React.createRef();
	}

	state = {
		quote: '',
		writer: '',
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
		let boolCheck = true;
		let keyString:string = '';
		Object.entries(this.state).forEach(([ key, value ]) => {
			if(this.util.notNullCheck(value) === false) {
				if(key !== 'result'){
					keyString = key.toUpperCase();
					boolCheck = false;
				}
			}
		});

		if(boolCheck !== true ) {
			this.child.current.alertMessage('error', `${keyString} is null.`);
			return;
		}

		const revisedQuote = '"'.concat(this.state.quote).concat('."');
		const revisedWriter = this.state.writer.concat(' says, ');
		const resultSentenct = revisedWriter + revisedQuote;
		this.setState({ result: resultSentenct });
	};

	// 초기화
	clearContents = () => {
		this.setState({
			quote: '',
			writer: '',
			result: ''
		});
	};

	// View
	render() {
		return (
			<div>
				<AlertComponent ref={this.child}/>
				<div className='container'>
					<br />
					<Card>
						<Card.Header>챕터2 - 입력, 프로세싱, 출력</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 3. 따옴표 출력</Card.Title>
							<Card.Text>인용구와 그 말을 한 사람을 입력 받아 인용구와 사람 이름을 출력</Card.Text>
						</Card.Body>
					</Card>
					<br />
					What is the quote?
					<br />
					<br />
					<textarea
						id='quote'
						name='quote'
						rows={4}
						cols={50}
						value={this.state.quote}
						onChange={this.inputChange}
						onKeyDown={this.inputKeyDown}
					/>
					<br />
					<br />
					Who said it? &nbsp;<input
						type='text'
						id='writer'
						name='writer'
						value={this.state.writer}
						onChange={this.inputChange}
						onKeyDown={this.inputKeyDown}
					/>
					<br />
					<br />
					<button className='btn btn-info' id='makeResult' onClick={this.makeResult}>
						결과 확인
					</button>
					&nbsp;
					<button className='btn btn-danger' onClick={this.clearContents}>
						입력 값들 초기화
					</button>
					<br />
					<br />
					<textarea
						id='result'
						name='result'
						rows={5}
						cols={50}
						disabled
						value={this.state.result}
						onChange={this.inputChange}
						style={{display:'none'}}
					/>
				</div>
			</div>
		);
	}
}
