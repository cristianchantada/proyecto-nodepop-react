import { LOGIN, ADD_ADVERTS, ADD_TAGS, LOGOUT } from "./actionTypes"

const defaultState = {
  auth: false,
  adverts: [],
  tags: []
}

export function auth(state= defaultState.login, action) {
  switch(action.type){
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state; 
}
}

export function adverts(state= defaultState.tags, action){
  if(action.type === ADD_ADVERTS){
    return action.payload;
  }
    return state;
};


export function tags(state= defaultState.tags, action){
  if(action.type === ADD_TAGS){
    return action.payload;
  }
    return state;
}

export default function combinedReducers(state= defaultState, action){
  return {
    auth: auth(state.auth, action),
    adverts: adverts(state.adverts, action),
    tags: tags(state.tags, action)
  }
}
