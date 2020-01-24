import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Wrapper } from './CreateBoard';
import { cancelCreatingBoard, submitNewBoard } from '../../../../redux/actions/simple_trello/BoardActions';
import BoardTitleForm from './BoardTitleForm';
import { store } from '../../../../redux/store';
import { STORE_NEW_BOARD_TO_COLLECTION } from '../../../../redux/constants/simple_trello/ActionTypes';

const Title = styled.h3`
	color: white;
	text-shadow: 0px 0px 3px #000;
`;

const TopWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	border-bottom: solid 1px rgb(240, 240, 240);
`;

const CloseBoardIcon = styled.img`
	width: 24px;
	height: 24px;
	padding: 5px;
	transition: all 200ms ease-in-out;

	&:hover {
		transition: all 200ms ease-in-out;
		transform: scale(1.25) rotate(4.5deg);
	}
`;

const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;

const BoardNamingTitle = styled.h5`
	color: white;
	text-shadow: 0px 0px 3px #000;
	font-weight: 400;
`;
type Props = {
	cancelCreatingBoard: any;
	submitNewBoard: any;
};
class ActiveCreateBoard extends Component<Props> {
	submit = (values: any) => {
		this.props.submitNewBoard(values.boardTitle);
		const store_newBoard: any = store.getState().newBoard;
		const newBoard: object = {
			id: store_newBoard.id,
			title: store_newBoard.title
		};
		store.dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard });
	};
	render() {
		return (
			<Wrapper>
				<TopWrapper>
					<Title>Creating a board</Title>
					<CloseBoardIcon
						onClick={() => this.props.cancelCreatingBoard()}
						src={require('../../../../css/images/simple_trello/closeIcon.svg')}
					/>
				</TopWrapper>
				<BodyWrapper>
					<BoardNamingTitle>What shall we call the board?</BoardNamingTitle>
					<BoardTitleForm onSubmit={this.submit} cancelAction={this.props.cancelCreatingBoard} />
				</BodyWrapper>
			</Wrapper>
		);
	}
}

export default connect(null, { cancelCreatingBoard, submitNewBoard })(ActiveCreateBoard);
