import { composeWithDevTools } from '@redux-devtools/extension';
import * as actionCreators from './actions';
import { createStore, combineReducers } from "redux";
import * as reducers from "./reducer";

const composeEnhancers = composeWithDevTools({
    actionCreators,
});

const reducer = combineReducers(reducers)

export default function configureStore (){
    const store = createStore(reducer, composeEnhancers());
    return store;
}
    