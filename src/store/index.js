import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {reducer as data1Reducer} from './reducer/data1';
import {reducer as data2Reducer} from './reducer/data2';

const reducer = combineReducers({
    data1: data1Reducer,
    data2: data2Reducer
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

export const store = createStore(reducer, enhancer);