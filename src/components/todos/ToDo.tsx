import React from 'react';
import '../../css/trello_basic/to_do.css';
import ToDoItem from './ToDoItem';
import Logo from '../../logo.svg';

/* https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-svelte-here-are-the-differences-c0bd2cc9b3f8 */
export default class To_Do extends React.Component {
	state = {
		list: [
			{
				id: 1,
				text: 'clean the house'
			},
			{
				id: 2,
				text: 'buy milk'
			}
		],
		toDo: ''
	};

	generateId = () => {
		const { list } = this.state;
		if (list && list.length > 1) {
			return Math.max(...list.map((t) => t.id)) + 1;
		} else {
			return 1;
		}
	};
	createNewToDoItem = () => {
		const { toDo, list } = this.state;
		if (!toDo) {
			alert('Please enter a todo!');
			return;
		}
		const newId = this.generateId();
		const newToDo = { id: newId, text: toDo };
		this.setState({ list: [ ...list, newToDo ], toDo: '' });
	};
	handleKeyPress = (e: any) => {
		if (e.key === 'Enter') {
			this.createNewToDoItem();
		}
	};
	handleInput = (e: any) => {
		this.setState({ toDo: e.target.value });
	};
	deleteItem = (id: number) => {
		this.setState({ list: this.state.list.filter((item) => item.id !== id) });
	};
	render() {
		const { toDo, list } = this.state;
		return (
			<div className='ToDo'>
				<img className='Logo' src={Logo} alt='React logo' />
				<h1 className='ToDo-Header'>React To Do</h1>
				<div className='ToDo-Container'>
					<div className='ToDo-Content'>
						{list.map((item) => {
							return <ToDoItem key={item.id} item={item} deleteItem={this.deleteItem} />;
						})}
					</div>

					<div className='ToDoInput'>
						<input type='text' value={toDo} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
						<button className='ToDo-Add' onClick={this.createNewToDoItem}>
							+
						</button>
					</div>
				</div>
			</div>
		);
	}
}
