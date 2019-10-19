import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../css/layouts/navbar.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
export default class NavbarComponent extends React.Component {
	state = {
		linkStyle: {
			color: 'inherit',
			textDecoration: 'inherit'
		}
	};
	render() {
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
							<NavDropdown title='챕터2' id='basic-nav-dropdown'>
								<LinkContainer to='/excercise1'>
									<NavDropdown.Item>연습문제 1</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/excercise2'>
									<NavDropdown.Item>연습문제 2</NavDropdown.Item>
								</LinkContainer>
								<LinkContainer to='/excercise3'>
									<NavDropdown.Item>연습문제 3</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type='text' placeholder='Search' className='mr-sm-2' />
							<Button variant='outline-success'>Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
