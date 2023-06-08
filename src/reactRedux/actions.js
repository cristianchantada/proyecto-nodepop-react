import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, ADD_ADVERTS_REQUEST, ADD_TAGS_REQUEST, ADD_ADVERTS_SUCCESS, ADD_ADVERTS_FAILURE, ADD_TAGS_FAILURE, ADD_TAGS_SUCCESS, ADD_ONE_ADVERT_REQUEST, ADD_ONE_ADVERT_SUCCESS, ADD_ONE_ADVERT_FAILURE, USER_INTERFACE_RESET_ERROR } from "./actionTypes";
import { areAdvertsLoaded } from "./selectors";
import { getAdverts } from "../api/service";
import { userLogin } from "../api/service";
import { adverts } from "./reducer";


export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error: true,
  payload: error
});

export const authLogin = (credentials, checked) => async dispatch => {
    dispatch(loginRequest());
    try{
      await userLogin(credentials, checked);
        dispatch(loginSuccess())
    } catch(error){
      dispatch(loginFailure(error));
      throw error;
  }
}

export const logout = () => ({
  type: LOGOUT
});

export const userInterfaceResetError = () => ({
  type: USER_INTERFACE_RESET_ERROR,
});

export const tags = tags => ({
  type: ADD_TAGS_SUCCESS,
  payload: tags
})

export const addAdvertsRequire = () => ({
  type: ADD_ADVERTS_REQUEST
}); 

export const addAdvertsSuccess = adverts => ({
  type: ADD_ADVERTS_SUCCESS,
  payload: adverts
})

export const addAdvertsFailure = error => ({
  type: ADD_ADVERTS_FAILURE,
  error: true,
  payload: error,
});

export const getApiAdverts = () => async (dispatch, getState) => {

  if(areAdvertsLoaded(getState())){
    return;
  }

  dispatch(addAdvertsRequire);
  try {
    const adverts = await getAdverts();
    dispatch(addAdvertsSuccess(adverts));
  } catch (error) {
    dispatch(addAdvertsFailure(error));
  }
};