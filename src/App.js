import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './Card';
import deckData from './Deck.json';

const App = () => {

  const [cards, setCards] = useState([]);
  const [commons, setCommons] = useState([]);
  const [highs, setHighs] = useState([]);

  useEffect( () => {
    setCommons(deckData.commonDeck);
    setHighs(deckData.highDeck);
  }, []);

  const theCards = cards.map( (card, i) => <Card id={`card${i}`} key={`${cards[i].name}${Math.floor(Math.random()*99)}`} cardData={cards[i]} cardNum={i} />);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarokka Reading</h1>
        <button className="make-cards" id="make-cards" onClick={ () => setCards(getReading(commons, highs)) }>See your Fortune!</button>
      </header>
      <main className="App-main">
        <div id="cards-box">
          {theCards}
        </div>
      </main>
    </div>
  );
}

const getReading = (commons, highs) => {
  const reading = [];

  for (let i = 0; i < 5; i++) {
    const deck = i < 3 ? commons : highs;
    const card = makeCard(deck);
    
    commons = commons.filter(aCard => aCard.name !== card.name);
    highs = highs.filter(aCard => aCard.name !== card.name);

    reading.push(card);
  }
  return reading;
}

const makeCard = deck => {
  const daCard = deck[Math.floor(Math.random() * deck.length)];

  daCard.flipped = Math.random() > 0.5;

  return daCard;
}

export default App;
