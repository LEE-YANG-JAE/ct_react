import React from 'react';
import Nosy from '../../css/images/dragAndDrop/Nosy.jpeg';
import Oreo from '../../css/images/dragAndDrop/Oreo.jpeg';
import Sadeyes from '../../css/images/dragAndDrop/Sadeyes.jpeg';
import '../../css/trello_basic/drag_and_drop.css';

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
		const div2: any = document.getElementById("div2");
		if(div2.contains(document.getElementById(this.targetId))){
			return;
		}
		e.target.appendChild(document.getElementById(this.targetId));

		// Append to the text input
		if (this.state.dogs.length === 0) {
			this.setState({ dogs: this.targetId });
		} else {
			this.setState({ dogs: this.state.dogs + ', ' + this.targetId });
		}
	};
	dropIt2 = (e: any) => {
		e.preventDefault();
		const div1: any = document.getElementById("div1");
		if(div1.contains(document.getElementById(this.targetId))){
			return;
		}
		e.target.appendChild(document.getElementById(this.targetId));

		// Remove from the text input
		const array: string[] = this.state.dogs.split(', ');
		if(!array.includes(this.targetId)){
			return;
		}
		const index: number = array.indexOf(this.targetId);
		if (index > -1) {
			array.splice(index, 1);
		}
		let stringArray: string = '';
		for (let value of array) {
			if (stringArray === '') {
				stringArray += value;
			} else {
				stringArray += ', ' + value;
			}
		}
		this.setState({ dogs: stringArray });
	};
	allowDrop = (e: any) => {
		e.preventDefault();
	};

	/** View **/
	render() {
		return (
			<div className='body'>
				<h2>My Favorite Dogs</h2>
				<br />
				<h1>Choose your favorite dogs in order of preference:</h1>
				<br />
				<div id='div1' onDrop={this.dropIt2} onDragOver={this.allowDrop}>
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
				<div id='div2' onDrop={this.dropIt} onDragOver={this.allowDrop} />
				<br />
				My Choices: 
				<input
					type='text'
					name='dogs'
					value={this.state.dogs}
					onChange={this.inputChange}
					style={this.option}
					disabled
				/>
			</div>
		);
	}
}
