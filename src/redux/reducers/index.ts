import articleReducer from './article';
import loginReducer from './login';
import { combineReducers } from 'redux';

export default combineReducers({
    articleReducer,
    loginReducer
  })
