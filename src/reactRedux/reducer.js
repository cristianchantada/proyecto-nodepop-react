import { LOGIN } from "./actionTypes"

const defaultState = {
    login: false,
    tags: [],
    adverts: []
}

export default function reducer(state= defaultState, action) {
    switch(action.type){
        case LOGIN:
            return {...state, login: true };
        default:
            return state; 
    }
}