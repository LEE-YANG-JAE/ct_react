import React from 'react';
import { Card } from 'react-bootstrap';
import ModalComponent from '../layouts/modals/modalConfirm';

export default class Excercise2 extends React.Component {
	// 전역 변수
	child: any; // 우선적으로 선언으로 만들어져 있어야 동작을 함
	
	// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
	constructor(props: any) {
		super(props);
		this.child = React.createRef();
	}

	state = {
		stringInput: '',
		modalSetting: {
			title: 'Modal heading2',
			body: `Woohoo, you're reading this text in a modal!`
		}
	};

	// 입력 변화
	inputChange = (e?: any) => {
		this.setState({ stringInput: e.target.value });
	};

	// 키 다운 이벤트
	inputKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			if (this.state.stringInput.length < 1) {
				(document.getElementById('result') as any).style.display = 'none';
				this.child.current.handleShow();
			} else {
				this.inputString();
			}
		}
	};

	// 내용 입력 후 결과
	inputString = () => {
		const str: string = this.state.stringInput;
		const resultString: string = `${str} has ${str.length} characters.`;
		const resultDom: any = document.getElementById('result');
		resultDom.value = resultString;
		resultDom.style.display = 'block';
	};

	// 초기화
	clean = () => {
		this.setState({ stringInput: '' });
		const resultDom: any = document.getElementById('result');
		resultDom.value = '';
		resultDom.style.display = 'none';
	};

	// 모달창 팝업 닫고나서의 콜백
	cbtest = (result: any) => {
		if (result === 'save') {
			alert('saved');
		}
	};

	// View
	render() {
		return (
			<div className='container'>
				<ModalComponent
					title={this.state.modalSetting.title}
					body={this.state.modalSetting.body}
					callback={this.cbtest}
					ref={this.child}
				/>
				<br />
				<Card>
					<Card.Header>챕터2 - 입력, 프로세싱, 출력</Card.Header>
					<Card.Body>
						<Card.Title>연습문제 2. 글자 수 세기</Card.Title>
						<Card.Text>문자열을 입력 받은 다음, 입력 받은 문자열과 문자열의 글자 수를 출력</Card.Text>
					</Card.Body>
				</Card>
				<br />
				What is the string?&nbsp;
				<input
					type='text'
					id='stringInput'
					name='stringInput'
					value={this.state.stringInput}
					onChange={this.inputChange}
					onKeyDown={this.inputKeyDown}
				/>
				&nbsp; {'입력한 글자수 : ' + this.state.stringInput.length}
				<br />
				<br />
				<button className='btn btn-info' onClick={this.inputString}>
					글자 수 확인 출력
				</button>
				&nbsp;
				<button className='btn btn-danger' onClick={this.clean}>
					초기화
				</button>
				<br />
				<br />
				<textarea id='result' name='result' rows={4} cols={50} disabled style={{ display: 'none' }} />
			</div>
		);
	}
}
