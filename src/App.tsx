import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const App: React.FC = () => {
    const [ result, setResult ] = useState('');
    const [ form, setValues ] = useState({
        userInput: ''
    });
    const updateField = (e: any) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const updateKeyDown = (e: any) => {
        if (e.keyCode === 13) {
            setValues({
                ...form,
                [e.target.name]: e.target.value
            });
            inputUserName();
        }
    };
    const inputUserName = () => {
        if (form.userInput.length > 0) {
            setResult(`Hello, ${form.userInput}`);
        } else {
            setResult(``);
        }
    };
    const clean = () => {
        setValues({
            ...form,
            userInput: ''
        });
        setResult(``);
    };
    return (
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#features'>Features</Nav.Link>
                    <Nav.Link href='#pricing'>Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-info'>Search</Button>
                </Form>
            </Navbar>
            <br />
            <div className='container'>
                <h2>연습문제1. 인사하기</h2>
                <hr />
                What is your name?&nbsp;
                <input
                    type='text'
                    name='userInput'
                    value={form.userInput}
                    onChange={updateField}
                    onKeyDown={updateKeyDown}
                />
                <br />
                <br />
                <button className='btn btn-info' onClick={inputUserName}>
                    내용 입력
                </button>
                &nbsp;
                <button className='btn btn-danger' onClick={clean}>
                    초기화
                </button>
                <br />
                <br />
                <label>
                    결과 : <input type='text' name='result' value={result} disabled />
                </label>
            </div>
        </div>
    );
};

export default App;