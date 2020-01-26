import { combineReducers } from 'redux';
import uniqueId from 'lodash/uniqueId';

import {
	SUBMIT_LIST,
	SUBMIT_NEW_CARD,
	HANDLE_DROP,
	ARCHIVE_POST,
	SELECT_ACTIVE_LIST
} from '../../constants/simple_trello/ActionTypes';

const ListReducer = (state: any = {}, action: any) => {
	const listId = uniqueId('list_');

	switch (action.type) {
		case SELECT_ACTIVE_LIST:
			const pid = action.payload.pid;
			const activeBoardData = action.payload.activeBoardData;
			const boardsCollection = action.payload.boardsCollection;
			
			const valueData:any = {};
			Object.keys(activeBoardData.listItems).map((key: any) => {
				if (activeBoardData.listItems[key].pid === pid) {
					valueData[key] = activeBoardData.listItems[key];
					return true;
				}
				return false;
			});
			if(Object.entries(valueData).length !== 0) {
				boardsCollection.map( (board : any) => {
					if (board.id === pid) {
						board.data = valueData;
						return true;
					}
					return false;
				});
				localStorage.setItem('boardsCollection', JSON.stringify(boardsCollection));
			}
			
			return valueData || [];

		case SUBMIT_LIST:
			return {
				...state,
				[listId]: {
					// the unique ID of the list
					name: action.payload.listItem, // name of the list
					id: listId, // list ID
					pid: action.payload.pid,
					cards: [] // card IDs go inside here
				}
			};

		case SUBMIT_NEW_CARD: {
			const { listId, cardName, cardId } = action.payload;
			const currentList = state[listId];
			currentList.cards.push({ name: cardName, cardId, listId, isArchived: false });
			return {
				...state,
				[listId]: currentList
			};
		}

		case HANDLE_DROP: {
			const { cardId, cardName, listId, newListId } = action.payload;
			const currentList = state[newListId]; // list that's going to be taking the new card
			currentList.cards.push({ name: cardName, cardId, listId: newListId }); // add the card to the list
			const removeCard = state[listId].cards.findIndex((card: any) => card.cardId === cardId); // find the card to remove
			state[listId].cards.splice(removeCard, 1); // remove the card from the list
			// const oldList = state[listId].cards.splice(removeCard, 1) // remove the card from the list
			return {
				...state,
				[newListId]: currentList
			};
		}

		case ARCHIVE_POST: {
			const { cardId, listId } = action.payload;
			const currentList = state[listId];
			const findCard = currentList.cards.find((card: any) => card.cardId === cardId);

			if (findCard.isArchived === false) {
				findCard.isArchived = true;
			} else {
				findCard.isArchived = false;
			}

			return {
				...state,
				[listId]: currentList
			};
		}

		default:
			return state;
	}
};

const ActiveBoardReducer = combineReducers({
	listItems: ListReducer
});

export default ActiveBoardReducer;
