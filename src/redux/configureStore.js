import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './stock/stock';

const reducers = combineReducers({ stock: stockReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
