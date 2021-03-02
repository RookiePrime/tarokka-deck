import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './Card';
import deckData from './Deck.json';

const App = () => {

  const [cards, addCards] = useState([]);
  const [commons, changeCommons] = useState([]);
  const [highs, changeHighs] = useState([]);

  useEffect(() => {
    fetch("./Deck.json")
      .then(() => JSON.parse(JSON.stringify(deckData)))
      .then(deck => {
        changeCommons(deck.commonDeck);
        changeHighs(deck.highDeck);
      });
    }, []);

  const theCards = cards.map( (card, i) => <Card key={cards[i].name} cardData={cards[i]} />);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarokka Reading</h1>
      </header>
      <main className="App-main">
        <button className="make-cards" id="make-cards" onClick={() => addCards(getReading(commons, highs))}>See your Fortune!</button>
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
    commons.filter(aCard => aCard.name === card.name);
    highs.filter(aCard => aCard.name === card.name);
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
