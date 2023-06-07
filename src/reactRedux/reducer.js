import { LOGIN, ADD_ADVERTS, ADD_TAGS, LOGOUT } from "./actionTypes"

const defaultState = {
  auth: false,
  adverts: [],
  tags: []
}

export function auth(state= defaultState.auth, action) {
  switch(action.type){
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state; 
}
}

export function adverts(state= defaultState.adverts, action){
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
