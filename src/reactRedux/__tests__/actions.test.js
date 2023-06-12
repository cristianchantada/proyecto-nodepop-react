import {
	addAdvertsSuccess,
	loginFailure,
	authLogin,
	loginRequest,
	loginSuccess,
	addAdvertsRequire,
	getApiAdverts,
	addAdvertsFailure
} from "../actions";
import { ADD_ADVERTS_SUCCESS, LOGIN_FAILURE } from "../actionTypes";

describe("testing React Redux actions", () => {
	describe("testing SYNC actions", () => {
		describe('testing "addAdvertsSuccess" sync action', () => {
			it('should return action object with "ADD_ADVERTS_SUCCESS" type', () => {
				const adverts = "adverts";
				const action = {
					type: ADD_ADVERTS_SUCCESS,
					payload: adverts
				};
				expect(addAdvertsSuccess(adverts)).toEqual(action);
			});
		});

		describe('testing "loginFailure" sync action', () => {
			it('should return action object with "LOGIN_FAILURE" type', () => {
				const errorPayloadValue = "error";
				const action = {
					type: LOGIN_FAILURE,
					error: true,
					payload: errorPayloadValue
				};
				expect(loginFailure(errorPayloadValue)).toEqual(action);
			});
		});
	});

	describe("testing ASYNC actions", () => {
		const dispatch = jest.fn();
		const getState = jest.fn();
		const services = {};

		describe('"authLogin" async action tests', () => {
			const credentials = "credentials";
			const checked = "checked";
			const redirectURL = "redirectURL";

			const action = authLogin(credentials, checked);

			const router = {
				navigate: jest.fn(),
				state: { location: { state: { from: { pathname: redirectURL } } } }
			};

			it("should follow the flow upon successful login", async () => {
				services.userLogin = jest.fn().mockResolvedValue();
				await action(dispatch, getState, { api: { services }, router });
				expect(dispatch).toHaveBeenNthCalledWith(1, loginRequest());
				expect(services.userLogin).toHaveBeenCalledWith(credentials, checked);
				expect(dispatch).toHaveBeenNthCalledWith(2, loginSuccess());
				expect(router.navigate).toHaveBeenCalledWith(redirectURL);
			});

			it("Should follow the flow upon login failure", async () => {
				const error = new Error("unauthorized");
				services.userLogin = jest.fn().mockRejectedValue(error);
				await action(dispatch, getState, { api: { services }, router });
				expect(dispatch).toHaveBeenNthCalledWith(1, loginRequest());
				expect(services.userLogin).toHaveBeenCalledWith(credentials, checked);
				expect(dispatch).toHaveBeenNthCalledWith(2, loginFailure(error));
			});
		});

		describe('"getApiAdverts" async action tests', () => {
			const action = getApiAdverts();

			it("Should follow the flow upon successfully retrieving ads", async () => {
				const adverts = "adverts";
				services.getAdverts = jest.fn().mockResolvedValue(adverts);
				await action(dispatch, getState, { api: { services } });
				expect(dispatch).toHaveBeenNthCalledWith(1, addAdvertsRequire());
				expect(services.getAdverts).toHaveBeenCalled();
				expect(dispatch).toHaveBeenNthCalledWith(2, addAdvertsSuccess(adverts));
			});
			it("Should follow the flow upon failure to retrieve ads", async () => {
				const error = new Error("Catastrophic error");
				services.getAdverts = jest.fn().mockRejectedValue(error);
				await action(dispatch, getState, { api: { services } });
				expect(dispatch).toHaveBeenNthCalledWith(1, addAdvertsRequire());
				expect(services.getAdverts).toHaveBeenCalled();
				expect(dispatch).toHaveBeenNthCalledWith(2, addAdvertsFailure(error));
			});
		});
	});
});
