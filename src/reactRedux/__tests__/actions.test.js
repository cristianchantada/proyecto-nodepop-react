import { addAdvertsSuccess, loginFailure } from "../actions";

import { ADD_ADVERTS_SUCCESS, LOGIN_FAILURE } from "../actionTypes";


describe('testing React Redux actions', () =>{
    describe('testing SYNC actions', () => {
        describe('testing "addAdvertsSuccess" sync action', () =>{
            it('should return action object with "ADD_ADVERTS_SUCCESS" type', () =>{
                const adverts = 'adverts';
                const action = {
                    type: ADD_ADVERTS_SUCCESS,
                    payload: adverts
                };
                expect(addAdvertsSuccess(adverts)).toEqual(action);
            });
        });

        describe('testing "loginFailure" sync action', () =>{
            it('should return action object with "LOGIN_FAILURE" type', () =>{
                const errorPayloadValue = 'error';
                const action = {
                    type: LOGIN_FAILURE,
                    error: true,
                    payload: errorPayloadValue
                }

                expect(loginFailure(errorPayloadValue)).toEqual(action);
            });
        });

    describe('testing ASYNC actions', () => {

    });

    })

})