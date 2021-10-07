import React from 'react';
import { getReading } from '../../utils';
import { selectCards, getReadingRedux } from '../../utils/fortuneSlice';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ({ commons, setCommons, highs, setHighs, setCards }) => {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    return (
        <header className="App-header">
            <h1>Tarokka Reading</h1>
            <button className="make-cards" id="make-cards" onClick={ () => {
                dispatch(getReadingRedux());
                console.log(cards);
                setCards(getReading(commons, setCommons, highs, setHighs))
            } }>See your Fortune!</button>
        </header>
    );
};

export default Navbar;