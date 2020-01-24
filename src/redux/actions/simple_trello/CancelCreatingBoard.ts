import { CANCEL_NEW_BOARD } from '../../constants/simple_trello/ActionTypes';

export default function cancelCreatingBoard() {
	return {
		type: CANCEL_NEW_BOARD,
		payload: false
	};
}
