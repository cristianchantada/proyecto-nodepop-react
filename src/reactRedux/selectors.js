
export const getAuth = state => state.auth;

// TODO mirar si esta línea que quita y la que ponemos debajo si sirve para algo
/* export const getReduxAdverts = state => state.adverts.data; */

export const getReduxAdverts = state => state.adverts.areLoaded ? state.adverts.data : [];


export const getReduxTags = state => state.tags;

// TODO mirar si esta línea que quita y la que ponemos debajo si sirve para algo

/* export const getReduxAdvertID = advertId => state => getReduxAdverts(state).find(advert => advert.id === advertId); */

export const getReduxAdvertID = advertId => state => state.adverts.data.find(advert => advert.id === advertId);

export const getUserInterface = state => state.userInterface;

export const areAdvertsLoaded = state => state.adverts.areLoaded;