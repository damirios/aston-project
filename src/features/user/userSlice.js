import { createSlice } from "@reduxjs/toolkit";

import { getInfoFromLS } from "../../utilitieFunctions/localStorageActions";
import { setInitialUserState } from "../../utilitieFunctions/setInitialUsersState";

const LSContent = getInfoFromLS();
// console.log(LSContent);

const initialState = setInitialUserState(LSContent);

// const initialState = {
//     authStatus: 'notAuthorized', // or authorized
//     favorites: {}, // fields: id, title, developer, genres, platforms, metascore, img
//     history: {}
// };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loggedIn(state, action) {
            state.authStatus = 'authorized';
        },
        loggedOut(state, action) {
            state.authStatus = 'notAuthorized';
            state.favorites = {};
            state.history = {};
        },
        addedFavorite(state, action) {
            const newFavorite = action.payload;
            const newFavoriteId = action.payload.id;
            state.favorites[newFavoriteId] = newFavorite;
        },
        deletedFavorite(state, action) {
            const id = action.payload;
            delete state.favorites[id];
        },
        addedToHistory(state, action) {
            
        }
    }
});

export const {
    loggedIn,
    loggedOut,
    addedFavorite,
    deletedFavorite,
    addedToHistory
} = userSlice.actions;

export default userSlice.reducer;