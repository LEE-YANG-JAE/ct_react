import React from 'react';
import '../../css/javascript30/day05/style.css';

export default class FlexPanels extends React.Component {
	// 토글 열렀을 때
	toggleOpen = (e: any) => {
		console.log('Hello');
		e.target.classList.toggle('open');
	};
	// 토클 활성화
	toggleActive = (e: any) => {
		console.log(e.propertyName);
		if (e.propertyName.includes('flex')) {
            e.target.classList.toggle('open-active');
		}
	};
	/** View **/
	render() {
		return (
			<div className='day05'>
				<div className='panels'>
					<div className='panel panel1' onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
						<p>Hey</p>
						<p>Let's</p>
						<p>Dance</p>
					</div>
					<div className='panel panel2' onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
						<p>Give</p>
						<p>Take</p>
						<p>Receive</p>
					</div>
					<div className='panel panel3' onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
						<p>Experience</p>
						<p>It</p>
						<p>Today</p>
					</div>
					<div className='panel panel4' onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
						<p>Give</p>
						<p>All</p>
						<p>You can</p>
					</div>
					<div className='panel panel5' onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
						<p>Life</p>
						<p>In</p>
						<p>Motion</p>
					</div>
				</div>
			</div>
		);
	}
}
