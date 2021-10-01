import React from 'react';
import { getReading } from '../../utils';
import { makeCard, selectCards } from '../../utils/fortuneSlice';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ commons, highs, setCards }) => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    return (
        <header className="App-header">
            <h1>Tarokka Reading</h1>
            <button className="make-cards" id="make-cards" onClick={ () => {
                dispatch(makeCard(commons));
                // console.log(makeCard(commons));
                console.log(cards);
                setCards(getReading(commons, highs))
            } }>See your Fortune!</button>
        </header>
    );
};

export default Navbar;