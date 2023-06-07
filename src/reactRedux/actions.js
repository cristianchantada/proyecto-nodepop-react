import { LOGIN, LOGOUT, ADD_ADVERTS, ADD_TAGS } from "./actionTypes";

export const login = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
})

export const tags = () => ({
    type: ADD_TAGS,
    payload: {}
})

export const adverts = () => ({
    type: ADD_ADVERTS,
    payload: {}
})