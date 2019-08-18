import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import promise from 'redux-promise';
import agencyReducer from './reducers/agencyReducer';
import {composeWithDevTools} from "redux-devtools-extension";

const store = () =>  createStore(combineReducers({
    agencyReducer,
}), composeWithDevTools(applyMiddleware(thunk, promise)));

export default store;