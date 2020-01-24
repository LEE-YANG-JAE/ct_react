import { CANCEL_NEW_BOARD, CREATE_NEW_BOARD, SUBMIT_NEW_BOARD } from '../../constants/simple_trello/ActionTypes';

export function cancelCreatingBoard() {
	return {
		type: CANCEL_NEW_BOARD,
		payload: false
	};
}

export function createNewBoard() {
	return {
		type: CREATE_NEW_BOARD,
		payload: true
	};
}

export function submitNewBoard(title: any) {
	return { type: SUBMIT_NEW_BOARD, payload: title };
}
