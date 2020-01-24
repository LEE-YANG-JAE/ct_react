import { CREATE_NEW_BOARD } from '../../constants/simple_trello/ActionTypes';

export default function createNewBoard() {
	return {
		type: CREATE_NEW_BOARD,
		payload: true
	};
}
