import { createSlice, current } from '@reduxjs/toolkit';
import deckData from '../Deck.json';

const initialState = {
    cards: [],
    deck: {
        commons: deckData.commonDeck,
        highs: deckData.highDeck
    },
}

export const fortuneSlice = createSlice({
    name: 'fortune',
    initialState,
    reducers: {
        makeCard: (state, action) => {
            const deck = action.payload;
            const newCard = deck[Math.floor(Math.random() * deck.length - 1)];
            state.cards.push(newCard);
        },
        removeFromDeck: (state, action) => {
            const cardToRemove = action.payload;
            console.log(cardToRemove.name);
            const deck = cardToRemove.suit ?
                current(state.deck.commons).filter(card => card.name !== cardToRemove.name)
                :
                current(state.deck.highs);
            if (cardToRemove.suit) {
                state.deck.commons = [...deck];
            }

        },
        eraseReading: state => {
            state.cards = [];
        },
        resetDeck: state => {
            state.deck = {
                commons: deckData.commonDeck,
                highs: deckData.highDeck
            };
        },
    },
});

export const { makeCard, removeFromDeck, eraseReading, resetDeck } = fortuneSlice.actions;

export const selectCards = state => state.fortune.cards;
export const selectDeck = state => state.fortune.deck;

export const getReadingRedux = () => (dispatch, getState) => {
    // Clear the reading data so that the readings don't add up
    dispatch(eraseReading());
    // Make sure the deck is fully populated
    dispatch(resetDeck());
    const deck = selectDeck(getState());

    for (let i = 0; i < 5; i++) {
        const chosenDeck = i < 3 ? deck.commons : deck.highs;
        // make a card and add it to state, either using the common or high deck
        dispatch(makeCard(chosenDeck));
        // Get the latest version of the reading state
        const reading = selectCards(getState());
        // remove the card from the deck so that it can't be chosen again
        dispatch(removeFromDeck(reading[i]));

        // currentDeck.commons = currentDeck.commons.filter(aCard => aCard.name !== card.name);
        // currentDeck.highs = currentDeck.highs.filter(aCard => aCard.name !== card.name);
    }
};

export default fortuneSlice.reducer;