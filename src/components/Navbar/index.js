import React from 'react';
import { getReading } from '../../utils';

const Navbar = ({ commons, highs, setCards }) => (
    <header className="App-header">
        <h1>Tarokka Reading</h1>
        <button className="make-cards" id="make-cards" onClick={ () => setCards(getReading(commons, highs)) }>See your Fortune!</button>
    </header>
);

export default Navbar;