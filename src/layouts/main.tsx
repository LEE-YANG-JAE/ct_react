import React from 'react';
import '../css/layouts/main.css';
import iphone from '../css/images/iphone.png';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<div className='first'>
					<div className='first-content'>
						<div className='first-content-left'>
							<h1>
								Landing Page<br />for Apps
							</h1>
							<p>
								We offer great landing pages<br />for most of the business
							</p>
							<div>
								<button className='content-btn'>Show More</button>
							</div>
						</div>
						<div className='first-content-right'>
							<img className='first-content-right-img' src={iphone} alt='iphone' />
						</div>
						<div style={{ clear: 'both' }} />
					</div>
				</div>
				<div className='seocnd'>
					<div className='second-content'>
						<h3>Perfect!</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, velit!</p>
						<button className='content-btn'>Show portfolio</button>
					</div>
				</div>
				<footer>
					<div className='footer-content'>
						<div>
							<h5>Copy Right Resevered</h5>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
