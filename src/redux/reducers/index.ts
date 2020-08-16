import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import articleReducer from './article';
import loginReducer from './login';

export default combineReducers({
	articleReducer,
	loginReducer,
	form: formReducer,
});
