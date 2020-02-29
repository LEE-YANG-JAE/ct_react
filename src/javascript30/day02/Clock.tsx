import React from 'react';
import '../../css/javascript30/day02/style.css';

export default class Clock extends React.Component {
	/** 클래스내 전역 변수 영역 **/
	private secondHand: any;
	private minsHand: any;
	private hourHand: any;
	
	/** 이벤트 리스너 영역 **/
	// 컴포넌트 마운트 완료 후
    componentDidMount() {
		this.secondHand = document.querySelector('.second-hand');
		this.minsHand = document.querySelector('.min-hand');
		this.hourHand = document.querySelector('.hour-hand');
		
		this.setDate();
		setInterval(this.setDate, 1000);
	}

	// 시계 설정
	setDate = () => {
		const now = new Date();

		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;
		this.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

		const mins = now.getMinutes();
		const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
		this.minsHand.style.transform = `rotate(${minsDegrees}deg)`;

		const hour = now.getHours();
		const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
		this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	}
	/** View **/
	render() {
		return (
			<div className='day2'>
				<div className="clock">
					<div className="clock-face">
						<div className="clock-hour hour-hand"></div>
						<div className="clock-min min-hand"></div>
						<div className="clock-second second-hand"></div>
					</div>
				</div>
			</div>
		);
	}
}
