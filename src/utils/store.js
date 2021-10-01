import { configureStore } from '@reduxjs/toolkit';
import fortuneReducer from './fortuneSlice';

export const store = configureStore({
    reducer: {
        fortune: fortuneReducer,
    },
});