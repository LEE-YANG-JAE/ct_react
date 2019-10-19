import React from 'react';
import { Card } from 'react-bootstrap';
import ModalConfirmComponent from '../components/modals/modalConfirm';

export default class Excercise2 extends React.Component {
	// 전역 변수
	private child: any; // 우선적으로 선언으로 만들어져 있어야 동작을 함
	// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
	constructor(props: any) {
		super(props);
		this.child = React.createRef();
	}

	state = {
		stringInput: ''
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
				const title = 'Excercise2';
				const body = `샘플 입력 값을 대신 넣을까요?<br/>샘플 입력 값을 대신 넣을까요?`;
				const flag = 'excercise2';
				this.child.current.handleShow(title, body, flag, this.modalCallback);
			} else {
				this.inputString();
			}
		}
	};

	// 내용 입력 후 결과
	inputString = () => {
		if (this.state.stringInput.length > 0) {
			const str: string = this.state.stringInput;
			const resultString: string = `${str} has ${str.length} characters.`;
			const resultDom: any = document.getElementById('result');
			resultDom.value = resultString;
			resultDom.style.display = 'block';
		} else {
			const resultDom: any = document.getElementById('result');
			resultDom.style.display = 'none';
		}
	};

	// 초기화
	clearContents = () => {
		this.setState({ stringInput: '' });
		const resultDom: any = document.getElementById('result');
		resultDom.value = '';
		resultDom.style.display = 'none';
	};

	// 모달창 팝업 닫고나서의 콜백
	modalCallback = (result: string, flag: string) => {
		if (result === 'confirm') {
			if (flag === 'excercise2') {
				this.setState({ stringInput: '안녕하세요' });
			}
		}
	};

	// View
	render() {
		return (
			<div className='container'>
				<ModalConfirmComponent ref={this.child} />
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
				<button className='btn btn-info' id='inputString' onClick={this.inputString}>
					글자 수 확인 출력
				</button>
				&nbsp;
				<button className='btn btn-danger' onClick={this.clearContents}>
					초기화
				</button>
				<br />
				<br />
				<textarea id='result' name='result' rows={4} cols={50} disabled style={{ display: 'none' }} />
			</div>
		);
	}
}
