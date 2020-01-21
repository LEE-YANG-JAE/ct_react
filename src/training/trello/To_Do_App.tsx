import React from 'react';
import '../../css/trello_basic/to_do.css';
import ToDo from '../../components/todos/ToDo';

/** https://medium.com/javascript-in-plain-english/implementing-drag-and-drop-on-a-web-page-7d34e211c8b */
export default class To_Do_App extends React.Component {
	render() {
		return (
			<div className='todo__body'>
				<ToDo />
			</div>
		);
	}
}
