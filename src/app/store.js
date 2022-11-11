import { configureStore } from '@reduxjs/toolkit';

import cardsSlice from '../features/cards/cardsSlice';
import userSlice from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        cards: cardsSlice
    }
});

export default store;