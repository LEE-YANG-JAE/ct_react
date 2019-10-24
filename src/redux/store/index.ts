import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import reducer from '../reducers/index';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

// Exports
export { store, persistor };
