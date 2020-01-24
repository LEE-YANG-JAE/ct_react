import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { archiveCard } from '../../../../../redux/actions/index';
import { fadeIn } from '../../../../../utils/animations';

const CardWrapper = styled.div`
	margin: 10px 0;
	padding: 14px 7px;
	background: rgb(241, 241, 241);
	border-radius: 4.5px;
	cursor: grab;
	animation: ${fadeIn} 300ms linear;
	display: flex;
	justify-content: space-around;
`;

const CardTitle = styled.h3`
	font-weight: bold;
	font-size: 19px;
	margin: 0;
`;

const ArchiveTask = styled.div`
	padding: 4px 7px;
	opacity: 0.4;
	border: none;
	border-radius: 9999;
	cursor: pointer;
	font-size: 16px;
`;


type Props = {
	archiveCard?: any;
	connectDragSource?: any;
	connectDragPreview?: any;
	isDragging?: any;
	title?: any;
	cardId?: any;
	listId?: any;
	isArchived?: any;
};
class Card extends Component<Props> {
	togglePost = (cardId: any, listId: any) => {
		this.props.archiveCard(cardId, listId);
	};

	render() {
		const { isDragging, connectDragSource, title, cardId, listId, isArchived }: any = this.props;

		const cardStyles = {
			opacity: isDragging || isArchived ? 0.35 : 1,
			boxShadow: '0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)',
			textDecoration: isArchived ? 'line-through' : 'none',
			backgroundColor: isArchived ? '#DECAFF' : '#caffde'
		};

		return connectDragSource(
			<div>
				<CardWrapper style={cardStyles}>
					<CardTitle>{title}</CardTitle>
					<ArchiveTask onClick={() => this.togglePost(cardId, listId)}>✓</ArchiveTask>
				</CardWrapper>
			</div>
		);
	}
}

const mapStateToProps = ({ activeBoardData }: any) => {
	return {
		activeBoardData
	};
};

export default connect(mapStateToProps, { archiveCard })(Card);
