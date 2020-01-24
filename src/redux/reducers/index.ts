import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import articleReducer from './article';
import loginReducer from './login';
import CreateBoardReducer from './simple_trello/CreateBoardReducer';
import BoardsCollectionReducer from './simple_trello/BoardsCollectionReducer';
import ActiveBoardReducer from './simple_trello/ActiveBoardReducer';
import ActiveBoardDataReducer from './simple_trello/ActiveBoardDataReducer';

export default combineReducers({
	articleReducer,
	loginReducer,
	form: formReducer,
	newBoard: CreateBoardReducer,
	boardsCollection: BoardsCollectionReducer,
	activeBoard: ActiveBoardReducer,
    activeBoardData: ActiveBoardDataReducer,
});
