import React from 'react';
import '../../css/javascript30/day03/style.css';

export default class ScopedCss extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private srcAddr: string;
	private imageRef: any;

	/** 상태 영역 **/
	state = {
		spacing: 10,
		blur: 10,
		base: '#ffc600'
	};

	/** 생성자 **/
	constructor(props: any) {
		super(props);
		this.srcAddr = 'https://source.unsplash.com/7bwQXzbF6KE/800x500';
		this.imageRef = React.createRef();
	}

	/** 이벤트 리스너 영역 **/
	// 입력 변화
	inputChange = (e: any) => {
		this.setState({ [e.target.name]: e.target.value });
		const suffix = e.target.dataset.sizing || '';
		this.imageRef.current.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
	};

	/** View **/
	render() {
		return (
			<div className='day3'>
				<h2>Update CSS Variables with <span className='hl'>JS</span></h2>
				<div className='controls'>
					<label htmlFor='spacing'>Spacing: </label>
					<input
						type='range'
						id='spacing'
						name='spacing'
						min='10'
						max='200'
						data-sizing='px'
						className='day3Input'
						value={this.state.spacing}
						onChange={this.inputChange}
						onMouseMove={this.inputChange}
					/>

					<label htmlFor='blur'>Blur: </label>
					<input
						type='range'
						id='blur'
						name='blur'
						min='0'
						max='25'
						data-sizing='px'
						className='day3Input'
						value={this.state.blur}
						onChange={this.inputChange}
						onMouseMove={this.inputChange}
					/>

					<label htmlFor='base'>Base Color: </label>
					<input
						type='color'
						id='base'
						name='base'
						className='day3Input'
						value={this.state.base}
						onChange={this.inputChange}
						onMouseMove={this.inputChange}
					/>
				</div>

				<img src={this.srcAddr} alt='no pic' ref={this.imageRef} className='day03img' />
			</div>
		);
	}
}
