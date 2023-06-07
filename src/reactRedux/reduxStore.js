import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers } from "redux";
import * as actionCreators from './actions';
import * as reducers from "./reducer";

const composeEnhancers = composeWithDevTools({
  actionCreators,
});

const reducer = combineReducers(reducers);

export default function configureStore(preloadedState){
  const store = createStore(reducer, preloadedState, composeEnhancers());
  return store;
}
    