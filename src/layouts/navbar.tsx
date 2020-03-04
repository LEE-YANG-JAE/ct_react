import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../redux/actions';
import { store } from '../redux/store';
import axios from 'axios';

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
		localStorage.clear();
	};
	componentDidMount() {
		const info = {
			headers: {
				Authorization: 'Bearer '.concat(store.getState().loginReducer.loginInfo.token)
			  },
		}
		axios
			.get('http://localhost:8080/Boot/hello', info)
			.then(() => {
				this.setState({ display: 'block' });
			})
			.catch(() => {
				this.setState({ display: 'none' });
				store.dispatch(logout());
				window.updateTopMostParent(store.getState().loginReducer.loginInfo);
				localStorage.clear();
			});
	}
	render() {
		return (
			<div>
				<Navbar bg='dark' variant='dark' expand='lg'>
					<Navbar.Brand>
						<Link to='/main' style={this.state.linkStyle}>
							Coding Training
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<NavDropdown title='JavaScript30 Day1-10' id='basic-nav-dropdown'>
								<LinkContainer to='/javascript30/day01'>
									<NavDropdown.Item>JavaScript Drum Kit</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/javascript30/day02'>
									<NavDropdown.Item>JS + CSS Clock</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/javascript30/day03'>
									<NavDropdown.Item>Scoped CSS Variables and JS</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/javascript30/day04'>
									<NavDropdown.Item>Array Cardio 01</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/javascript30/day05'>
									<NavDropdown.Item>FlexPanels</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
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
								<LinkContainer to='/chapter3/excercise2'>
									<NavDropdown.Item>피자 파티</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/chapter3/excercise3'>
									<NavDropdown.Item>페인트 계산기</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown title='기타 트레이닝' id='basic-nav-dropdown'>
								<LinkContainer to='/trello_basic'>
									<NavDropdown.Item>트렐로 CSS 기초</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/drag_and_drop'>
									<NavDropdown.Item>마우스 드래그 앤 드롭</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/card_arrange'>
									<NavDropdown.Item>카드 드래그 앤 드롭</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/to_do_basic'>
									<NavDropdown.Item>To-Do 기초</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/simple_trello'>
									<NavDropdown.Item>트렐로 클론</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/simple_tetris'>
									<NavDropdown.Item>테트리스 만들기</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown title='시스템 관리' id='basic-nav-dropdown'>
								<LinkContainer to='/sysmgmt/gridTest'>
									<NavDropdown.Item>Fancy Grid Test</NavDropdown.Item>
								</LinkContainer>
							</NavDropdown>
						</Nav>
						<Form inline>
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
