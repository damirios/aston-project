import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getInfoFromLS, getFavoriteGamesFromLS, getHistoryFromLS } from "../../utilitieFunctions/localStorageActions";
import { setInitialUserState } from "../../utilitieFunctions/setInitialUsersState";

import { getNextIndex } from "../../utilitieFunctions/getNextIndex";

const initialState = setInitialUserState(getInfoFromLS());

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
            const index = getNextIndex(state.history);
            state.history[index + 1] = action.payload;
        },
        historyCleared(state, action) {
            state.history = {};
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFavoriteGamesAndHistory.pending, (state, action) => {
            })
            .addCase(fetchFavoriteGamesAndHistory.fulfilled, (state, action) => {
                state.favorites = action.payload.games;
                state.history = action.payload.history;
            })
    }
    
});

export const {
    loggedIn,
    loggedOut,
    addedFavorite,
    deletedFavorite,
    addedToHistory,
    historyCleared
} = userSlice.actions;

export default userSlice.reducer;

// имитирую запрос к серверу, чтобы получить избранное
export const fetchFavoriteGamesAndHistory = createAsyncThunk('user/fetchFavoriteGames', async () => {
    const response = new Promise( (res, rej) => {
        setTimeout(() => {
            const games = getFavoriteGamesFromLS();
            const history = getHistoryFromLS();
            res({
                games, history
            });
        }, 500);
    });
    return response;
});