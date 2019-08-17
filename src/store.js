import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware),
);

const initsStore = initialState => createStore(combineReducers({

}), initialState, enhancer);

export default initsStore;
