import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListWrapper from './lists/ListWrapper';
import CreateNewList from './lists/CreateNewList';
import ListEditingMode from './lists/ListEditingMode';
import ListItemsContainer from './lists/ListItemsContainer';
import { enableListEditMode, submitList } from '../../../../redux/actions/simple_trello/CardActions';
import { find } from 'lodash';
import { store } from '../../../../redux/store';
import {
	SELECT_ACTIVE_BOARD_SUCCESS,
	SELECT_ACTIVE_BOARD
} from '../../../../redux/constants/simple_trello/ActionTypes';
import ActiveBoardTitle from './ActiveBoardTitle';

type Props = {
	activeBoard: any;
	submitList: any;
	match: any;
};

class ShowActiveBoard extends Component<Props> {
	componentDidMount() {
		const { match }: any = this.props;

		const boardsCollection = store.getState().boardsCollection;
		const activeBoard = find(boardsCollection, (board: any) => board.id === match.params.id);

		store.dispatch({ type: SELECT_ACTIVE_BOARD, payload: activeBoard });
		store.dispatch({ type: SELECT_ACTIVE_BOARD_SUCCESS });
	}

	getTitle = () => {
		return this.props.activeBoard.title;
	};

	handleListSubmit = (values: any) => {
		this.props.submitList(values.listItem);
	};

	render() {
		const { activeBoard, enableListEditMode }: any = this.props;
		if (activeBoard.isFetching) {
			return <div>loading...</div>;
		}

		return (
			<div>
				<ActiveBoardTitle>{this.getTitle()}</ActiveBoardTitle>
				<ListWrapper>
					<ListItemsContainer />
					{activeBoard.isEditingList ? (
						<ListEditingMode onSubmit={this.handleListSubmit} />
					) : (
						<CreateNewList addList={enableListEditMode} />
					)}
				</ListWrapper>
			</div>
		);
	}
}

function mapStateToProps({ activeBoard }: any) {
	return {
		activeBoard
	};
}

export default connect(mapStateToProps, { enableListEditMode, submitList })(ShowActiveBoard);
