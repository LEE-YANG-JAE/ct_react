import React from 'react';
import loginStyle from '../css/layouts/login.module.css';
import { Link } from 'react-router-dom';
import Util from '../utils/util';
import ModalAlert from '../components/modals/ModalAlert';

export default class Login extends React.Component {
	private util = new Util();
	private form: any;
	private modalAlert: any;
	constructor(props: any) {
		super(props);
		this.form = React.createRef();
		this.modalAlert = React.createRef();
	}
	state = {
		userId: '',
		password: '',
		submited: false
	};
	// 입력 변화
	inputChange = (e: any) => {
		this.setState({ [e.target.name]: e.target.value, submited: false });
	};
	loginBtn = (e: any) => {
		this.setState({ submited: true });
		const f = this.util.getAllFormValues(this.form.current);
		const loginCheck: boolean = this.loginProcess(f);
		if (loginCheck) {
			document.location.href = '/chapter2/excercise2';
		} else {
			this.modalAlert.current.handleShow('test','test2');
		}
	};

	loginProcess(f: any): boolean {
		if (f.userId === 'admin' && f.password === '1234') {
			return true;
		} else {
			return false;
		}
	}
	render() {
		return (
			<div className={loginStyle.body}>
				<ModalAlert ref={this.modalAlert}/>
				<form className={loginStyle.loginForm} ref={this.form}>
					<h1>Login</h1>

					<div className={loginStyle.txtb}>
						<input
							type='text'
							placeholder='Username'
							name='userId'
							value={this.state.userId}
							onChange={this.inputChange}
						/>
					</div>
					{!this.state.userId.length && this.state.submited ? (
						<span style={{ color: 'red' }}>Please input your ID</span>
					) : (
						<span />
					)}

					<div className={loginStyle.txtb}>
						<input
							type='password'
							placeholder='Password'
							name='password'
							value={this.state.password}
							onChange={this.inputChange}
						/>
					</div>
					{!this.state.password.length && this.state.submited ? (
						<span style={{ color: 'red' }}>Please input your Password</span>
					) : (
						<span />
					)}

					<input type='button' className={loginStyle.logbtn} onClick={this.loginBtn} value='Login' />
					<div className={loginStyle.bottomText}>
						Don't have account? <Link to='/chapter2/excercise1'>Sign Up</Link>
					</div>
				</form>
			</div>
		);
	}
}
