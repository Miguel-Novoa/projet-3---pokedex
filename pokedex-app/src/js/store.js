import getLikedPoke from "./slice.js";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
      pokeSlice: getLikedPoke,
    },
});