import React from 'react';
import '../../css/trello_basic/card_arrange.css';

/** https://medium.com/javascript-in-plain-english/using-javascript-to-create-trello-like-card-re-arrange-and-drag-and-drop-557e60125bb4 */
export default class Card_Arrange extends React.Component {
	private targetId: string = '';
	allowDrop = (e: any) => {
		e.preventDefault();
	};
	dragStart = (e: any) => {
		this.targetId = e.target.id;
	};
	dropIt = (e: any) => {
		e.preventDefault();
		let sourceIdEl: any = document.getElementById(this.targetId);
		let sourceIdParentEl: any = sourceIdEl.parentElement;

		// ev.target.id here is the id of target Object of the drop
		let targetEl: any = document.getElementById(e.target.id);
		let targetParentEl: any = targetEl.parentElement;

		// Compare List names to see if we are going between lists
		// or within the same list
		if (targetParentEl.id !== sourceIdParentEl.id) {
			// If the source and destination have the same
			// className (card), then we risk dropping a Card in to a Card
			// That may be a cool feature, but not for us!
			if (targetEl.className === sourceIdEl.className) {
				// Append to parent Object (list), not to a
				// Card in the list
				// This is in case you drag and drop a Card on top
				// of a Card in a different list
				targetParentEl.appendChild(sourceIdEl);
			} else {
				// Append to the list
				targetEl.appendChild(sourceIdEl);
			}
		} else {
			// Same list. Swap the text of the two cards
			// Just like swapping the values in two variables

			// Temporary holder of the destination Object
			let holder = targetEl;
			// The text of the destination Object.
			// We are really just moving the text, not the Card
			let holderText = holder.textContent;
			// Replace the destination Objects text with the sources text
			targetEl.textContent = sourceIdEl.textContent;
			// Replace the sources text with the original destinations
			sourceIdEl.textContent = holderText;
			holderText = '';
		}
	};

	render() {
		return (
			<div>
				<div className='board-layout'>
					<div className='left'>
						<div className='board-text'>Today Board</div>
					</div>
					<div id='boardlists' className='board-lists'>
						<div id='list1' className='board-list' onDrop={this.dropIt} onDragOver={this.allowDrop}>
							<div className='list-title'>To Do</div>

							<div id='card1' className='card' draggable='true' onDragStart={this.dragStart}>
								Work on article
							</div>
							<div id='card2' className='card' draggable='true' onDragStart={this.dragStart}>
								Back up database
							</div>
							<div id='card3' className='card' draggable='true' onDragStart={this.dragStart}>
								Build Lambda function
							</div>
							<div id='card4' className='card' draggable='true' onDragStart={this.dragStart}>
								Work on course content
							</div>
							<div id='card5' className='card' draggable='true' onDragStart={this.dragStart}>
								Debug SQL code
							</div>
						</div>
						<div id='list2' className='board-list' onDrop={this.dropIt} onDragOver={this.allowDrop}>
							<div className='list-title'>In Progress</div>
						</div>
						<div id='list3' className='board-list' onDrop={this.dropIt} onDragOver={this.allowDrop}>
							<div className='list-title'>Done</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
