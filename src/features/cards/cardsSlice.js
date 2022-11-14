import { createSlice } from "@reduxjs/toolkit";

const TLOU = {
    title: 'The Last of Us Part I',
    developer: 'Naughty Dog',
    genres: ['Action', 'Shooter'],
    platforms: ['PlayStation 5', 'PC'],
    metascore: 89,
    imageSRC: 'https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg'
}


const initialState = {

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