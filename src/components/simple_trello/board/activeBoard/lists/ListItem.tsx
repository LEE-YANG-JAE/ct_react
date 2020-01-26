import React, { Component } from 'react';
import styled from 'styled-components';
import CreateCardContainer from '../cards/CardContainer';
import { connect } from 'react-redux';
import { fadeIn } from '../../../../../utils/animations';
import { handleDrop } from '../../../../../redux/actions/index';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../../../../utils/constants';

const ListItemWrapper = styled.div`
	display: inline-block;
	vertical-align: top;
	margin: 20px;
	background-color: rgb(255, 255, 255);
	padding: 5px 10px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	transition: all 150ms ease-in-out;
	animation: ${fadeIn} 300ms linear;
`;

const ListItemHeader = styled.h4`
	color: #333;
	letter-spacing: 1.66;
	text-align: center;
	text-transform: uppercase;
	font-weight: 900;
`;

const dropSource = {
	drop(props: any, monitor: any) {
		const card = monitor.getItem(); // this item is being dragged
		props.handleDrop(card.title, card.cardId, card.listId, props.id);
		// const droppedItem = props.onDrop(monitor.getItem());
	}
};

function collect(connect: any, monitor: any) {
	return {
		// Call this function inside render()
		// to let React DnD handle the drag events:
		connectDropTarget: connect.dropTarget(),
		// You can ask the monitor about the current drag state:
		isOver: monitor.isOver(),
		isOverCurrent: monitor.isOver({ shallow: true }),
		canDrop: monitor.canDrop(),
		itemType: monitor.getItemType()
	};
}

type Props = {
	id: any;
	name: any;
	connectDropTarget: any;
};
class ListItem extends Component<Props> {
	render() {
		const { name, id, connectDropTarget }: any = this.props;
		return connectDropTarget(
			<div>
				<ListItemWrapper>
					<ListItemHeader>{name}</ListItemHeader>
					<hr />
					<CreateCardContainer listId={id}/>
				</ListItemWrapper>
			</div>
		);
	}
}

export default (connect(null, { handleDrop })(DropTarget(ItemTypes.CARD, dropSource, collect)(ListItem)));