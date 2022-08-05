import {createSlice} from "@reduxjs/toolkit";

export const initialState = [];

export const slice = createSlice({
    name : 'pokeSlice',
    initialState,
    reducers : {
        getLikedPoke : (state, action)=>{
            state.push(action.payload)
        },

        deletePoke : (state, action)=>{
            return state.filter(({id})=>{
                console.log(action.payload.id)
                return id !== action.payload.id;
            })
        }
    },
});

export const { getLikedPoke, deletePoke } = slice.actions;

export default slice.reducer;