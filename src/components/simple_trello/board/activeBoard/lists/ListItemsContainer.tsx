import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import mapValues from 'lodash/mapValues';
import ListItem from './ListItem';

const ListItemsWrapper = styled.div`display: flex;`;

type Props = {
	activeBoardData: any;
	pid: any;
}
class ListItemsContainer extends Component<Props> {
	renderListItems = () => {
		const { activeBoardData, boardsCollection, pid}: any = this.props;
		console.log(activeBoardData, boardsCollection, pid);
		
		if(Object.entries(activeBoardData.listItems).length === 0) {
			boardsCollection.map( (board : any) => {
				if (board.id === pid) {
					if(board.data !== undefined && board.data !== null){
						if(Object.entries(board.data).length !== 0){
							activeBoardData.listItems = board.data;
							return true;
						}
					}
				}
				return false;
			});
		}
		const mappedList = mapValues(activeBoardData.listItems, (list) => list.name);
		const mappedKeys = Object.keys(mappedList);

		return mappedKeys.map((id: any, i: any) => {
			return <ListItem id={id} key={i} name={mappedList[id]} />;
		});
	};

	render() {
		return (
			<div>
				<ListItemsWrapper>{this.renderListItems()}</ListItemsWrapper>
			</div>
		);
	}
}

function mapStateToProps({ activeBoardData, boardsCollection }: any) {
	return { activeBoardData, boardsCollection };
}

export default connect(mapStateToProps)(ListItemsContainer);
