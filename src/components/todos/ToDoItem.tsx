import React from 'react';

interface Props {
	item: any;
	deleteItem: any;
}
export default class ToDoItem extends React.Component<Props> {
	private item: any;
	private deleteItem: any;
	
	constructor(props: any) {
		super(props);
		this.item = props.item;
		this.deleteItem = props.deleteItem;
	}
	render() {
		return (
			<div className='ToDoItem'>
				<p className='ToDoItem-Text'>{this.item.text}</p>
				<button className='ToDoItem-Delete' onClick={() => this.deleteItem(this.item.id)}>
					-
				</button>
			</div>
		);
	}
}
