import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, ADD_ADVERTS_REQUEST, ADD_TAGS_REQUEST, ADD_ADVERTS_SUCCESS, ADD_ADVERTS_FAILURE, ADD_TAGS_FAILURE, ADD_TAGS_SUCCESS, ADD_ONE_ADVERT_REQUEST, ADD_ONE_ADVERT_SUCCESS, ADD_ONE_ADVERT_FAILURE, USER_INTERFACE_RESET_ERROR, ADVERT_CREATED_SUCCESS, ADVERT_DELETED_SUCCESS, ADVERT_CREATED_REQUEST, ADVERT_CREATED_FAILURE } from "./actionTypes";
import { areAdvertsLoaded, getReduxAdvertID } from "./selectors";

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

export const getApiAdverts = () => async (dispatch, getState, {api: {services}}) => {

  if(areAdvertsLoaded(getState())){
    return;
  }

  dispatch(addAdvertsRequire);
  try {
    const adverts = await services.getAdverts();
    dispatch(addAdvertsSuccess(adverts));
  } catch (error) {
    dispatch(addAdvertsFailure(error));
  }
};

export const authLogin = (credentials, checked) => async (dispatch, _getState, {api: {services}, router}) => {
    
  dispatch(loginRequest());
  try{
    await services.userLogin(credentials, checked);
      dispatch(loginSuccess());
      const to = router.state.location.state?.from?.pathname || '/';
      router.navigate(to);
  } catch(error){
    dispatch(loginFailure(error));
  }
}

export const getApiAdvDetail = advertId => async(dispatch, getState, {api: {services}, router}) => {

  const isAdvert = getReduxAdvertID(advertId)(getState);
  if(isAdvert){
    return;
  }

  dispatch(addOneAdvertRequest);
  try {
    const advert = await services.getAdv(advertId);
    dispatch(addOneAdvertSuccess);
  } catch (error) {
    dispatch(addOneAdvertFailure(error));
    if (error.response.status === 404) {
      return router.navigate("/404");
    }
  }
}

export const addOneAdvertRequest = () => ({
  type: ADD_ONE_ADVERT_REQUEST
}); 

export const addOneAdvertSuccess = advert => ({
  type: ADD_ONE_ADVERT_SUCCESS,
  payload: advert
})

export const addOneAdvertFailure = error => ({
  type: ADD_ONE_ADVERT_FAILURE,
  error: true,
  payload: error,
});

//TODO falta implementar el error, request, successs

export const advertCreated = advert => async(dispatch, _getState, {api: services, router}) => {
  dispatch(advertCreatedRequest());
  try {
    const createdAdvert = await services.postAdv(advert);
    dispatch(advertCreatedSuccess(createdAdvert));
    router.navigate(`/adverts/${createdAdvert.id}`)
    return createdAdvert;

  } catch (error) {
    dispatch(advertCreatedFailure(error));
    if(error.status === 401) { 
      router.navigate('/login');
    }
  }
}

export const advertCreatedSuccess = advert => ({
  type: ADVERT_CREATED_SUCCESS,
  payload: advert 
})

export const advertCreatedRequest = () => ({
  type: ADVERT_CREATED_REQUEST,
})

export const advertCreatedFailure = error => ({
  type: ADVERT_CREATED_FAILURE,
  payload: error,
  error: true 
})

