import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Excercise1: React.FC = () => {
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
		<div className='container'>
			<br />
			<Card>
				<Card.Header>챕터2 - 입력, 프로세싱, 출력</Card.Header>
				<Card.Body>
					<Card.Title>연습문제 1. 인사하기</Card.Title>
					<Card.Text>이름을 입력 받아 이름을 이용하여 인사말을 출력</Card.Text>
				</Card.Body>
			</Card>
			<br />
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
	);
};
export default Excercise1;
