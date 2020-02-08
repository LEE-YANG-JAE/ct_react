import React from 'react';
import iphone from '../css/images/iphone.png';
import axios from 'axios';
import { store } from '../redux/store';

export default class Main extends React.Component {
	test = () => {
		const loginInfo: any = store.getState().loginReducer.loginInfo;
		const info = {
			headers: {
				Authorization: 'Bearer '.concat(loginInfo.token)
			  },
		}
		axios
			.get('http://localhost:8080/Boot/api/dataload', info)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<article className='first'>
					<div className='first__content'>
						<div className='first__left'>
							<h1>
								Landing Page<br />for Apps
							</h1>
							<p>
								We offer great landing pages<br />for most of the business
							</p>
							<div>
								<button className='btn btn-dark btn--big' onClick={this.test}>
									Show More
								</button>
							</div>
						</div>
						<div className='first__right'>
							<img className='first__img' src={iphone} alt='iphone' />
						</div>
						<div className='clearFloat' />
					</div>
				</article>
				<article className='seocnd'>
					<div className='second__content'>
						<h3>Perfect!</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, velit!</p>
						<button className='btn btn-dark btn--big'>Show portfolio</button>
					</div>
				</article>
				<footer className='footer'>
					<div className='footer__content'>
						<h5>Copy Right Resevered</h5>
					</div>
				</footer>
			</div>
		);
	}
}
