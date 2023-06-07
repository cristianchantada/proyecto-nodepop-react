import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from "redux";
import reducer from "./reducer";
import * as actions from './actions';

const composeEnhancers = composeWithDevTools({
    actions,
});

export default function configureStore (){
    const store = createStore(reducer, composeEnhancers());
    return store;
}
    