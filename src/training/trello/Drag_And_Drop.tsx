import React from 'react';
import Nosy from '../../css/images/dragAndDrop/Nosy.jpeg';
import Oreo from '../../css/images/dragAndDrop/Oreo.jpeg';
import Sadeyes from '../../css/images/dragAndDrop/Sadeyes.jpeg';

/** https://medium.com/javascript-in-plain-english/implementing-drag-and-drop-on-a-web-page-7d34e211c8b */
export default class Drag_And_Drop extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private targetId: any = '';
	private option: object = { height: '25px', width: '300px' };

	/** 상태 영역 **/
	state = {
		dogs: ''
	};

	/** 이벤트 리스너 영역 **/
	// 입력 변화
	inputChange = (e: any) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	dragStart = (e: any) => {
		this.targetId = e.target.id;
	};
	dropIt = (e: any) => {
		e.preventDefault();
		e.target.appendChild(document.getElementById(this.targetId));

		// Append to the text input
		this.setState({ dogs: this.state.dogs + ' ' + this.targetId });
	};
	dropIt2 = (e: any) => {
		e.preventDefault();
		e.target.appendChild(document.getElementById(this.targetId));

		// Remove from the text input
		this.setState({ dogs: this.state.dogs.replace(this.targetId, '') });
	};
	allowDrop = (e: any) => {
		e.preventDefault();
	};

	/** View **/
	render() {
		return (
			<div>
				<div id='div1' onDrop={this.dropIt2} onDragOver={this.allowDrop}>
					asfdsfd
					<img
						id='Nosy'
						src={Nosy}
						alt='Nosy'
						draggable='true'
						onDragStart={this.dragStart}
						width='120'
						height='100'
					/>
					<img
						id='Oreo'
						src={Oreo}
						alt='Oreo'
						draggable='true'
						onDragStart={this.dragStart}
						width='120'
						height='100'
					/>
					<img
						id='Sadeyes'
						src={Sadeyes}
						alt='Sadeyes'
						draggable='true'
						onDragStart={this.dragStart}
						width='120'
						height='100'
					/>
				</div>
				<br />Drag Up or Down
				<br />
				<div id='div2' onDrop={this.dropIt} onDragOver={this.allowDrop}>
					asdfasdfadsf
				</div>
				<br />
				<br />
				My Choices:
				<input type='text' value={this.state.dogs} onChange={this.inputChange} style={this.option} />
			</div>
		);
	}
}
