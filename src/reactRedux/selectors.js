
export const getAuth = state => state.auth;

export const getReduxAdverts = state => {
    console.log(state.adverts.data);
    return state.adverts.data; 
} 
 
export const getReduxTags = state => state.tags;

export const getReduxAdvertID = advertId => state => getReduxAdverts(state).find(advert => advert.id === advertId); 

export const getUserInterface = state => state.userInterface;