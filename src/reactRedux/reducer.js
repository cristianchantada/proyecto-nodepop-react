import {
	ADD_ONE_ADVERT_SUCCESS,
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	ADD_ADVERTS_SUCCESS,
	ADD_TAGS_SUCCESS,
	LOGOUT,
	USER_INTERFACE_RESET_ERROR,
	ADVERT_CREATED_SUCCESS,
	ADVERT_DELETED_SUCCESS
} from "./actionTypes";

export const defaultState = {
	auth: false,
	adverts: {
		areLoaded: false,
		data: []
	},
	tags: [],
	userInterface: {
		isLoading: false,
		error: null
	}
};

export function auth(state = defaultState.auth, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return true;
		case LOGOUT:
			return false;
		default:
			return state;
	}
}

export function userInterface(state = defaultState.userInterface, action) {
	if (action.error) {
		return { isLoading: false, error: action.payload };
	}

	if (/REQUEST$/.test(action.type)) {
		return { isLoading: true, error: null };
	}

	if (/SUCCESS$/.test(action.type)) {
		return { isLoading: false, error: null };
	}

	if (action.type === USER_INTERFACE_RESET_ERROR) {
		return { ...state, error: null };
	}

	return state;
}

export function adverts(state = defaultState.adverts, action) {
	if (action.type === ADD_ADVERTS_SUCCESS) {
		return { areLoaded: true, data: action.payload };
	}
	if (action.type === ADD_ONE_ADVERT_SUCCESS) {
		return { ...state, data: [action.payload] };
	}
	if (action.type === ADVERT_CREATED_SUCCESS) {
		return { ...state, data: [action.payload, ...state.data] };
	}

	if (action.type === ADVERT_DELETED_SUCCESS) {
		return {
			...state,
			data: state.data.filter(advert => advert.id !== action.payload)
		};
	}
	return state;
}

export function tags(state = defaultState.tags, action) {
	if (action.type === ADD_TAGS_SUCCESS) {
		return action.payload;
	}
	return state;
}
