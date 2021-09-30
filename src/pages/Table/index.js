import React from 'react';
import Card from '../../components/Card';

const Table = ({ cards }) => {

    return (
        <main className='App-main'>
            <div id='cards-box'>
                {cards.map( (card, i) => <Card id={`card${i}`} key={`${cards[i].name}${Math.floor(Math.random()*99)}`} cardData={cards[i]} cardNum={i} />)}
            </div>
        </main>
    );
};

export default Table;