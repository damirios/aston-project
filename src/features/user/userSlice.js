import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authStatus: 'notAuthorized',
    favorites: {},
    history: {}
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;