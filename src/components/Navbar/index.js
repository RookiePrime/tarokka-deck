import React from 'react';
import { getReading } from '../../utils';

const Navbar = ({ setCards, deck }) => (
    <header className="App-header">
        <h1>Tarokka Reading</h1>
        <button className="make-cards" id="make-cards" onClick={ e => {
            e.target.blur();
            setCards(getReading(deck))
        } }>See your Fortune!</button>
    </header>
);

export default Navbar;