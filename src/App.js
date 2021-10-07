import React, { useState } from 'react';
import './App.css';

import deckData from './Deck.json';

import Navbar from './components/Navbar';
import Table from './pages/Table';

const App = () => {

  const [cards, setCards] = useState([]);
  const [commons, setCommons] = useState(deckData.commonDeck);
  const [highs, setHighs] = useState(deckData.highDeck);
  
  return (
    <div className="App">
      <Navbar 
        commons={commons} 
        setCommons={setCommons}
        highs={highs} 
        setHighs={setHighs}
        setCards={setCards} 
      />
      <Table cards={cards} />
    </div>
  );
}

export default App;
