import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import * as services from "../api/service";
import * as client from '../api/client'
import * as actionCreators from './actions';
import * as reducers from "./reducer";
import thunk from 'redux-thunk';
 
const composeEnhancers = composeWithDevTools({
  actionCreators,
});

const reducer = combineReducers(reducers);

export default function configureStore(preloadedState, {router}){
  const middleware = [thunk.withExtraArgument({api: {services, client} , router})]
  const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)));
  return store;
}
    