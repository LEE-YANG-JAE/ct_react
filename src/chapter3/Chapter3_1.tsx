import React from 'react';
import { Card } from 'react-bootstrap';
import AlertComponent from '../components/alerts/AlertComponent';
import ModalAlert from '../components/modals/ModalAlert';

export default class Chapter3_1 extends React.Component {
	private child: any;
	private modalAlert: any;
	constructor(props: any) {
		super(props);
		this.child = React.createRef();
		this.modalAlert = React.createRef();
	}
	// 상태
	state = {
		currentAge: ''
	};
	// 입력 변화
	inputChange = (e: any) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// 키 다운 이벤트
	inputKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			this.makeResult();
		}
	};
	// 내용 입력 후 결과
	makeResult = () => {};
	// 초기화
	clearContents = () => {
		this.setState({
			currentAge: ''
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
						<Card.Header>챕터3 - 연산</Card.Header>
						<Card.Body>
							<Card.Title>연습문제 7. 직사각형 방의 면적</Card.Title>
							<Card.Text>
								정년까지 몇 년 남았는지, 퇴직하는 해는 몇 년이 되는지를 계산하는 프로그램.
								<br />현재 나이와 퇴직하고자 하는 나이를 입력 받는다.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}
}
