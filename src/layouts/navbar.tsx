import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import '../css/layouts/navbar.css';
import { Link, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../redux/actions';
import { store } from '../redux/store';

class NavbarCompnent extends React.Component {
	state = {
		linkStyle: {
			color: 'inherit',
			textDecoration: 'inherit'
		},
		display: 'block'
	};
	logout = () => {
		store.dispatch(logout());
		window.updateTopMostParent(store.getState().loginReducer.loginInfo);
	};
	componentDidMount() {
		let loginStatus: any = store.getState().loginReducer.loginInfo;
		if (loginStatus.logined) {
			this.setState({ display: 'block' });
		} else {
			this.setState({ display: 'none' });
		}
	}
	render() {
		return (
			<div style={{ display: this.state.display }}>
				{this.state.display === 'block' ? <Redirect to='/main' /> : <Redirect to='/' />}
				<Navbar bg='dark' variant='dark' expand='lg'>
					<Navbar.Brand>
						<Link to='/main' style={this.state.linkStyle}>
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
							{/* <LinkContainer to='/login' style={{ display: 'none' }}>
								<Button variant='outline-success'>Login</Button>
							</LinkContainer> */}
							<LinkContainer to='/login' style={{ display: this.state.display }}>
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
