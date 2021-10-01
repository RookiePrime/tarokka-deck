import { createSlice } from '@reduxjs/toolkit';
import deckData from '../Deck.json';

const initialState = {
    cards: [],
    commons: deckData.commonDeck,
    highs: deckData.highDeck
}

export const fortuneSlice = createSlice({
    name: 'fortune',
    initialState,
    reducers: {
        makeCard: (state, action) => {
            console.log(action.payload);
            const newCard = action.payload[Math.floor(Math.random() * action.payload.length)];
            console.log(state.cards);
            state.cards = [...state.cards, newCard];
        },
    },
});

export const { makeCard } = fortuneSlice.actions;

export const selectCards = state => state.cards;

export default fortuneSlice.reducer;