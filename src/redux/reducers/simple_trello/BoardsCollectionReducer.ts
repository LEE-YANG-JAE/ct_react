import { STORE_NEW_BOARD_TO_COLLECTION } from '../../constants/simple_trello/ActionTypes';

const initialState: any[] = [];

export default function(state = initialState, action: any) {
	switch (action.type) {
		case STORE_NEW_BOARD_TO_COLLECTION:
			return [ ...state, action.payload ];

		default:
			return state;
	}
}
