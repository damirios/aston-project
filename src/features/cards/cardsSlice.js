import { createSlice } from "@reduxjs/toolkit";
import { games } from "../../App";

const gamesObject = {};

games.forEach(game => {
    const id = game.id;
    gamesObject[id] = game;
});

const initialState = {
    ...gamesObject
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCardToFavorite(state, action) {

        }
    }
});

export default cardsSlice.reducer;