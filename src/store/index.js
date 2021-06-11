import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {defaultReducer} from './reducers/defaultReducer';
import {progressReducer} from './reducers/progressReducer';
import {factReducer} from './reducers/factReducer';

export const rootReducer = combineReducers({
  defaultReducer,
  progressReducer,
  factReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['progressReducer'],
  blackList: ['factReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];
middlewares.push(thunk);

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export let persistedStore = persistStore(store);
