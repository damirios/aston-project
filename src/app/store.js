import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../features/user/userSlice';
import gamesSlice from '../features/games/gamesSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        games: gamesSlice
    }
});

export default store;