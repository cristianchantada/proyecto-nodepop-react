import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, ADD_ADVERTS_REQUEST, ADD_TAGS_REQUEST, ADD_ADVERTS_SUCCESS, ADD_ADVERTS_FAILURE, ADD_TAGS_FAILURE, ADD_TAGS_SUCCESS, ADD_ONE_ADVERT_REQUEST, ADD_ONE_ADVERT_SUCCESS, ADD_ONE_ADVERT_FAILURE, USER_INTERFACE_RESET_ERROR } from "./actionTypes";
import { userLogin } from "../api/service";
import { getAdverts } from "../api/service";


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

export const adverts = adverts => ({
  type: ADD_ADVERTS_SUCCESS,
  payload: adverts
})

export const addAdvertsRequire = () => ({
  type: ADD_ADVERTS_REQUEST
}); 

export const getApiAdverts = async () => {
  try {
    const adverts = await getAdverts();

  } catch (error) {
    
  }

}