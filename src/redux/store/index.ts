import { createStore } from 'redux';
import { articleReducer, loginReducer } from '../reducers/index';

const articleStore = createStore(articleReducer);
const loginStore = createStore(loginReducer);

export { articleStore, loginStore };
