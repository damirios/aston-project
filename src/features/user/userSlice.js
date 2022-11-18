import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getInfoFromLS, getFavoriteGamesFromLS } from "../../utilitieFunctions/localStorageActions";
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
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFavoriteGames.pending, (state, action) => {
                console.log('pending');
            })
            .addCase(fetchFavoriteGames.fulfilled, (state, action) => {
                state.favorites = action.payload;
            })
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

// имитирую запрос к серверу, чтобы получить избранное
export const fetchFavoriteGames = createAsyncThunk('user/fetchFavoriteGames', async () => {
    const response = new Promise( (res, rej) => {
        setTimeout(() => {
            const games = getFavoriteGamesFromLS();
            res(games);
        }, 500);
    });
    return response;
});