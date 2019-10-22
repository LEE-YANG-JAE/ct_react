import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import '../css/layouts/navbar.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { loginStore } from '../redux/store';
import { logout } from '../redux/actions';


class NavbarCompnent extends React.Component {
	state = {
		linkStyle: {
			color: 'inherit',
			textDecoration: 'inherit'
		},
		display: 'none',
		logined: false
	};
	logout = () => {
		loginStore.dispatch(logout());
		console.log(loginStore.getState());
	};
	render() {
		let {logined} = this.state;
		const loginStatus = loginStore.getState();
		logined = loginStatus.loginInfo.logined;
		console.log(logined);
		return (
			<div>
				<Navbar bg='dark' variant='dark' expand='lg'>
					<Navbar.Brand>
						<Link to='/' style={this.state.linkStyle}>
							Coding Training
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<NavDropdown title='입력, 프로세싱, 출력' id='basic-nav-dropdown'>
								<LinkContainer to='/chapter2/excercise1'>
									<NavDropdown.Item>인사하기</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/chapter2/excercise2'>
									<NavDropdown.Item>글자 수 세기</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/chapter2/excercise3'>
									<NavDropdown.Item>따옴표 출력</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/chapter2/excercise4'>
									<NavDropdown.Item>Mad Libs</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/chapter2/excercise5'>
									<NavDropdown.Item>간단한 수학</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/chapter2/excercise6'>
									<NavDropdown.Item>퇴직 계산기</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown title='연산' id='basic-nav-dropdown'>
								<LinkContainer to='/chapter3/excercise1'>
									<NavDropdown.Item>직사각형 방의 면적</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						</Nav>
						<Form inline>
							<LinkContainer to='/login'>
								<Button variant='outline-success'>Login</Button>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Button variant='outline-danger' onClick={this.logout}>
									Logout
								</Button>
							</LinkContainer>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default NavbarCompnent;
