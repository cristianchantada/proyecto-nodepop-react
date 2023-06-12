import { defaultState, adverts, auth, userInterface } from "../reducer";
import {
	loginSuccess,
	loginFailure,
	addAdvertsSuccess,
	addOneAdvertFailure,
	advertCreatedSuccess
} from "../actions";

describe("Testing React Redux Reducer", () => {
	describe('"auth" division reducer test', () => {
		const stateAuth = defaultState.auth;

		it('should manage "LOGIN_SUCCESS" action', () => {
			const action = loginSuccess();
			expect(auth(stateAuth, action)).toBe(true);
		});

		it('should manage "LOGIN_FAILURE" action', () => {
			const action = loginFailure();
			expect(auth(stateAuth, action)).toBe(false);
		});
	});

	describe('"adverts" division reducer test', () => {
		const stateAdverts = defaultState.adverts;

		it('should manage "ADD_ADVERTS_SUCCESS" action', () => {
			const advertsArray = [{}, {}];
			const action = addAdvertsSuccess(advertsArray);
			expect(adverts(stateAdverts, action)).toEqual({
				areLoaded: true,
				data: advertsArray
			});
		});

		it('should manage "ADD_ONE_ADVERT_FAILURE" action', () => {
			const stateUserInterface = defaultState.userInterface;
			const error = "error";
			const action = addOneAdvertFailure(error);
			expect(userInterface(stateUserInterface, action)).toEqual({
				isLoading: false,
				error: error
			});
		});

		it('should manage "ADVERT_CREATED_SUCCESS" action', () => {
			const advert = { advert: "advert" };
			const action = advertCreatedSuccess(advert);
			expect(adverts(stateAdverts, action)).toEqual({
				...stateAdverts,
				data: [advert, ...stateAdverts.data]
			});
		});
	});
});
