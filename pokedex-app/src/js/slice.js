import {createSlice} from "@reduxjs/toolkit";

export const initialState = [];

export const slice = createSlice({
    name : 'pokeSlice',
    initialState,
    reducers : {
        getLikedPoke : (state, action)=>{
            console.log('action', action)
            console.log('before', state)
            state.push(action.payload)
            console.log('after', state)
        },
    },
});

export const { getLikedPoke } = slice.actions;

export default slice.reducer;