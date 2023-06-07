import { LOGIN, LOGOUT, ADD_ADVERTS, ADD_TAGS } from "./actionTypes";

export const login = () => ({
    type: LOGIN
});

export const logout = () => ({
    type: LOGOUT
})

export const tags = tags => ({
    type: ADD_TAGS,
    payload: tags
})

export const adverts = adverts => ({
    type: ADD_ADVERTS,
    payload: adverts
})