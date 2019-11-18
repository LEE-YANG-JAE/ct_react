import React from 'react';
import { Form, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

interface Props {
	functionTest: any;
}
// https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs
// https://www.pluralsight.com/guides/how-to-statically-type-react-components-with-typescript
// https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined
export default class Chapter32PopupContent extends React.Component<Props> {
	/** 클래스내 전역 변수 영역 **/
	constructor(props: any) {
		super(props);
		this.makeResult = this.makeResult.bind(this);
	}
	state = {
		people: '',
		piece: ''
	};
	/** 이벤트 리스너 영역 **/
	// 입력 변화
	inputChange = (e: any) => {
		if (e.target.validity.valid) {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	makeResult() {
		let value: any = {};
		value.test = '1';
		value.test2 = '2';
		const peopleCnt = parseInt(this.state.people);
		const pieceCnt = parseInt(this.state.piece);
		const pizzaCnt = (peopleCnt * pieceCnt) / 8;
		this.props.functionTest(pizzaCnt);
	}
	/** View **/
	render() {
		return (
			<div className='container-fluid'>
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
									pattern='[0-9]*'
									value={this.state.people}
									onChange={this.inputChange}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm='4'>
								<div>
									How many <strong>pizzas</strong> do they want?
								</div>
							</Form.Label>
							<Col sm='8'>
								<input
									type='text'
									id='piece'
									name='piece'
									className='form-control'
									pattern='[0-9]*'
									value={this.state.piece}
									onChange={this.inputChange}
								/>
							</Col>
						</Form.Group>
					</Form>
					<ButtonToolbar className='exForm__buttonToolBar'>
						<Button variant='primary' onClick={this.makeResult}>
							피자 적당 조각 갯수 결과
						</Button>
					</ButtonToolbar>
				</div>
			</div>
		);
	}
}
