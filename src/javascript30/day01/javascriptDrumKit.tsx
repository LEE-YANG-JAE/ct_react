import React from 'react';
import '../../css/javascript30/day01/style.css';

export default class JavascriptDrumKit extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private soundArr: object[];

	/** 생성자 **/
	constructor(props: any) {
        super(props);
		this.soundArr = [
			{ 65: 'clap' },
			{ 83: 'hihat' },
			{ 68: 'kick' },
			{ 70: 'openhat' },
			{ 71: 'boom' },
			{ 72: 'ride' },
			{ 74: 'snare' },
			{ 75: 'tom' },
			{ 76: 'tink' }
		];
	}
	
	/** 이벤트 리스너 영역 **/
	// 컴포넌트 마운트 완료 후
    componentDidMount() {
		window.addEventListener('keydown', this.playSound);
		const keys = Array.from(document.querySelectorAll('.key'));
		keys.forEach((key) => key.addEventListener('transitionend', this.removeTransition));
	}

	// 오디오 플레이
	playSound = (e: any) => {
		const audio: any = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key: any = document.querySelector(`div[data-key="${e.keyCode}"]`);
		if (!audio) return;

		key.classList.add('playing');
		audio.currentTime = 0;
		audio.play();
	};

	// 트랜지션 제거
	removeTransition = (e: any) => {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove('playing');
	};

	/** View **/
	render() {
		return (
			<div className='day1'>
				<div className='keys'>
					<div data-key='65' className='key'>
						<kbd>A</kbd>
						<span className='sound'>clap</span>
					</div>
					<div data-key='83' className='key'>
						<kbd>S</kbd>
						<span className='sound'>hihat</span>
					</div>
					<div data-key='68' className='key'>
						<kbd>D</kbd>
						<span className='sound'>kick</span>
					</div>
					<div data-key='70' className='key'>
						<kbd>F</kbd>
						<span className='sound'>openhat</span>
					</div>
					<div data-key='71' className='key'>
						<kbd>G</kbd>
						<span className='sound'>boom</span>
					</div>
					<div data-key='72' className='key'>
						<kbd>H</kbd>
						<span className='sound'>ride</span>
					</div>
					<div data-key='74' className='key'>
						<kbd>J</kbd>
						<span className='sound'>snare</span>
					</div>
					<div data-key='75' className='key'>
						<kbd>K</kbd>
						<span className='sound'>tom</span>
					</div>
					<div data-key='76' className='key'>
						<kbd>L</kbd>
						<span className='sound'>tink</span>
					</div>
				</div>
				{this.soundArr.map((value, index) => {
					let audioKey;
					let audioValue;
					Object.entries(value).map(([ key, value ]) => {
						audioKey = key;
						audioValue = value;
						return null;
					});
					return (
						<audio
							key={index}
							data-key={audioKey}
							src={require(`../../css/javascript30/day01/sounds/${audioValue}.wav`)}
						/>
					);
				})}
			</div>
		);
	}
}
