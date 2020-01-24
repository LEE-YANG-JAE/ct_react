import { SUBMIT_NEW_BOARD } from '../../constants/simple_trello/ActionTypes';

export default function submitNewBoard(title: any) {
	return { type: SUBMIT_NEW_BOARD, payload: title };
}
