import React from 'react';
import { connect } from 'react-redux';
import CreateBoard from './CreateBoard';
import ActiveCreateBoard from './ActiveCreateBoard';

type Props = {
	newBoard: any;
};

class CreateBoardContainer extends React.Component<Props> {
	render() {
		const { newBoard } = this.props;
		return <div>{newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard />}</div>;
	}
}

function mapStateToProps({ newBoard }: any) {
	return {
		newBoard
	};
}

export default connect(mapStateToProps)(CreateBoardContainer);
