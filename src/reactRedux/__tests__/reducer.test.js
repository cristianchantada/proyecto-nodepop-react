import { defaultState, adverts, auth } from '../reducer';
import {loginSuccess, loginFailure, addAdvertsSuccess, addOneAdvertFailure, advertCreatedSuccess} from '../actions'

describe('Testing React Redux Reducer', () =>{
  describe('"auth" division reducer test', () => {
    
    const stateAuth = defaultState.auth;

    it('should manage "LOGIN_SUCCESS" action', () => {
      const action = loginSuccess();
      expect(auth(stateAuth, action)).toBe(true);
    });

    it('should manage "LOGIN_FAILURE" action', () => {
      const action = loginFailure();
      expect(auth(stateAuth, action)).toBe(false);
    })
  });

  describe('"adverts" division reducer test', () => {

    const stateAdverts = defaultState.adverts;

    it('should manage "ADD_ADVERTS_SUCCESS" action', () => {
      const adverts = [];
      const action = addAdvertsSuccess(adverts);
      expect(adverts(stateAdverts, action)).toEqual(adverts);
    });

    it('should manage "ADD_ONE_ADVERT_FAILURE" action', () => {

    });

    it('should manage "ADVERT_CREATED_SUCCESS" action', () => {

    });


  });
  
});