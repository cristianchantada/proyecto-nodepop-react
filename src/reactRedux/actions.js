import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, ADD_ADVERTS_REQUEST, ADD_TAGS_REQUEST, ADD_ADVERTS_SUCCESS, ADD_ADVERTS_FAILURE, ADD_TAGS_FAILURE, ADD_TAGS_SUCCESS, ADD_ONE_ADVERT_REQUEST, ADD_ONE_ADVERT_SUCCESS, ADD_ONE_ADVERT_FAILURE, USER_INTERFACE_RESET_ERROR, ADVERT_CREATED_SUCCESS, ADVERT_CREATED_REQUEST, ADVERT_CREATED_FAILURE, ADVERT_DELETED_SUCCESS, ADVERT_DELETED_FAILURE, ADVERT_DELETED_REQUEST } from "./actionTypes";
import { getReduxAdvertID } from "./selectors";

// LOGIN actions & thunk:

export const authLogin = (credentials, checked) => async (dispatch, _getState, {api: services, router}) => {
    
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

// get ADVERTS from API; thunk & actions:

export const getApiAdverts = () => async (dispatch, _getState, {api: services}) => {

  dispatch(addAdvertsRequire);
  try {
    const adverts = await services.getAdverts();
    dispatch(addAdvertsSuccess(adverts));
  } catch (error) {
    dispatch(addAdvertsFailure(error));
  }
};

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

// Get adv detail from REDUX or API if it is not exist here, actions & thunk:

export const getApiAdvDetail = advertId => async(dispatch, getState, {api: {services}, router}) => {

  const isAdvert = getReduxAdvertID(advertId)(getState);
  if(isAdvert){
    return;
  }

  dispatch(addOneAdvertRequest);
  try {
    const advert = await services.getAdv(advertId);
    dispatch(addOneAdvertSuccess(advert));
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

// Create advert actions and thunk:

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
});

export const advertCreatedRequest = () => ({
  type: ADVERT_CREATED_REQUEST,
});

export const advertCreatedFailure = error => ({
  type: ADVERT_CREATED_FAILURE,
  payload: error,
  error: true 
});

// Delete adv from API actions & thunks:

export const deleteApiAdv = advId => async (dispatch, _getState, {api: services, router}) => {
  dispatch(advDeleteRequest());
  try {
    await services.deleteAdv(advId);
    alert("El anuncio ha sido borrado correctamente");
    dispatch(advDeleteSuccess());
    router.navigate('/');
  } catch (error) {
    dispatch(advDeleteFailure(error))
  }
} 

export const advDeleteRequest = () => ({
  type: ADVERT_DELETED_REQUEST
});

export const advDeleteSuccess = () => ({
  type: ADVERT_DELETED_SUCCESS
});

export const advDeleteFailure = error => ({
  type :ADVERT_DELETED_FAILURE,
  payload: error,
  error: true
});

// Get tags from API actions & thunk:

export const getApiTags = () => async (dispatch, _getState, {api: services}) => {
  dispatch(tagRequire());
  try {
    const tags = await services.getTags();
    dispatch(tagSuccess(tags));
  } catch (error) {
    dispatch(tagFailure(error));
  }
};

export const tagRequire = () => ({
  type: ADD_TAGS_REQUEST,
});

export const tagSuccess = tags => ({
  type: ADD_TAGS_SUCCESS,
  payload: tags
});

export const tagFailure = error => ({
  type: ADD_TAGS_FAILURE,
  payload: error,
  error: true
});

// Reset error action:

export const userInterfaceResetError = () => ({
  type: USER_INTERFACE_RESET_ERROR,
});