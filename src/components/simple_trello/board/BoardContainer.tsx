import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../../utils/animations';
import CreateBoardContainer from './boardCreation/CreateBoardContainer';
import { connect } from 'react-redux';
import ShowAllBoards from './ShowAllBoard';

const Wrapper = styled.div`
	display: flex;
	padding: 60px 35px;
	flex-wrap: wrap;
	animation: ${fadeIn} 300ms linear;
`;

type Props = {
	boardsCollection: any;
};

class BoardContainer extends React.Component<Props> {
	renderAllBoards = () => {
		const { boardsCollection } = this.props;
		
		return boardsCollection.map((board: any) => {
			return (
				<ShowAllBoards
				  id={board.id}
				  key={board.id}
				  title={board.title}
				/>
			  )
		});
	};
	render() {
		return (
			<Wrapper>
				<CreateBoardContainer />
				{this.renderAllBoards()}
			</Wrapper>
		);
	}
}

function mapStateToProps({ boardsCollection }: any) {
	return {
		boardsCollection
	};
}

export default connect(mapStateToProps)(BoardContainer);
