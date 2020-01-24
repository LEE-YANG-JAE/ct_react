import uniqueId from 'lodash/uniqueId';

import { CREATE_NEW_BOARD, CANCEL_NEW_BOARD, SUBMIT_NEW_BOARD } from '../../constants/simple_trello/ActionTypes';

const initialState = {
	isBoardOpen: false,
	title: null,
	id: null,
	success: false
};

export default function(state = initialState, action: any) {
	switch (action.type) {
		case CREATE_NEW_BOARD:
			return {
				...state,
				title: null,
				isBoardOpen: true,
				id: null,
				success: false
			};

		case CANCEL_NEW_BOARD:
			return {
				...state,
				title: null,
				isBoardOpen: false,
				id: null,
				success: false
			};

		case SUBMIT_NEW_BOARD:
			return {
				...state,
				isBoardOpen: false,
				title: action.payload,
				id: uniqueId('')
			};

		default:
			return state;
	}
}
