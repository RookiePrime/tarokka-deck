import React, { useState } from 'react';
import './App.css';

import deckData from './Deck.json';

import Navbar from './components/Navbar';
import Table from './pages/Table';

const App = () => {

  const [cards, setCards] = useState([]);
  const [deck] = useState(deckData);
  
  return (
    <div className="App">
      <Navbar setCards={setCards} deck={deck} />
      <Table cards={cards} />
    </div>
  );
}

export default App;
