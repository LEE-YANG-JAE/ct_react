import {
	SUBMIT_NEW_CARD,
	HANDLE_DROP,
	ARCHIVE_POST,
	SUBMIT_LIST,
	LIST_EDIT_MODE_ENABLED,
	STOP_EDITING_LIST,
	SELECT_ACTIVE_BOARD
} from '../../constants/simple_trello/ActionTypes';

export function archiveCard(cardId: any, listId: any) {
	return { type: ARCHIVE_POST, payload: { cardId, listId } };
}

export function handleDrop(cardName: any, cardId: any, listId: any, newListId: any) {
	return { type: HANDLE_DROP, payload: { cardName, cardId, listId, newListId } };
}

export function submitNewCard(card: any, cardId: any, listId: any) {
	return { type: SUBMIT_NEW_CARD, payload: { cardName: card, listId, cardId } };
}

export function submitList(name: any) {
	return { type: SUBMIT_LIST, payload: name };
}

export function enableListEditMode() {
	return { type: LIST_EDIT_MODE_ENABLED, payload: true };
}

export function disableListEditMode() {
	return { type: STOP_EDITING_LIST, payload: false };
}

export function selectActiveBoard(activeBoard: any) {
	return { type: SELECT_ACTIVE_BOARD, payload: activeBoard };
}
