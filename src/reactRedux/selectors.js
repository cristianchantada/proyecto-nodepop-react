
export const getAuth = state => state.auth;

export const getReduxAdverts = state => state.adverts;

export const getReduxTags = state => state.tags;

export const getReduxAdvertID = advertId => state => {
    getReduxAdverts(state).find(state => state.id === +advertId);
};

export const getUserInterface = state => state.ui;