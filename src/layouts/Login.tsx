import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Util from '../utils/util';
import ModalAlert from '../components/modals/ModalAlert';
import { loginStatusChange } from '../redux/actions';
import { store } from '../redux/store';
import axios from 'axios';

// https://stackoverflow.com/questions/48219432/react-router-typescript-errors-on-withrouter-after-updating-version
// https://dev.to/kozakrisz/react-router---how-to-pass-history-object-to-a-component-3l0j
// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
	param1: string;
};

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
	someString: string;
};

class LoginComponent extends React.Component<PropsType> {
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
		this.setState({ [e.target.name]: e.target.value });
	};

	// 키 다운 이벤트
	inputKeyDown = (e: any) => {
		if (e.keyCode === 13) {
			this.loginBtn();
		}
	};

	loginBtn = () => {
		this.setState({ submited: true });
		const f = this.util.getAllFormValues(this.form.current);

		if (this.util.notNullCheck(f.userId) === false || this.util.notNullCheck(f.password) === false) {
			return;
		}
		this.loginProcess(f);
	};

	// 로그인 검증
	loginProcess(f: any) {
		axios
			.post('http://localhost:8080/Boot/api/login', { userId: this.state.userId, passNo: this.state.password })
			.then((res) => {
				const { history } = this.props;
				if (history) {
					const loginInfo: any = {
						logined: true,
						userId: res.data.userId,
						locale: res.data.locale,
						token: res.data.token
					};
					store.dispatch(loginStatusChange(loginInfo));
					window.updateTopMostParent(loginInfo);
					history.replace('/main');
				}
			})
			.catch((err) => {
				this.modalAlert.current.handleShow('Login', 'Login Fail. Please check your information.');
				console.log(err);
			});
	}
	render() {
		const { userId, password, submited } = this.state;
		return (
			<div className='login'>
				<ModalAlert ref={this.modalAlert} />
				<form className='login__form' ref={this.form}>
					<h1>Login</h1>

					<div className='login__txtb'>
						<input
							type='text'
							placeholder='Username'
							name='userId'
							value={this.state.userId}
							onChange={this.inputChange}
							onKeyDown={this.inputKeyDown}
						/>
					</div>
					{submited && !userId && <span style={{ color: 'red' }}>Please input your ID</span>}
					<div className='login__txtb'>
						<input
							type='password'
							placeholder='Password'
							name='password'
							value={this.state.password}
							onChange={this.inputChange}
							onKeyDown={this.inputKeyDown}
						/>
					</div>
					{submited && !password && <span style={{ color: 'red' }}>Please input your Password</span>}

					<input type='button' className='login__btn' onClick={this.loginBtn} value='Login' />
					<div className='login__bottomText'>
						Don't have account? <Link to='/chapter2/excercise1'>Sign Up</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginComponent);
