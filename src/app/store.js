import { configureStore } from '@reduxjs/toolkit';

import cardsSlice from '../features/cards/cardsSlice';
import userSlice from '../features/user/userSlice';
import gamesSlice from '../features/games/gamesSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        cards: cardsSlice,
        games: gamesSlice
    }
});

export default store;