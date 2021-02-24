import React, {Component} from 'react';
import './App.css';
import Card from './Card';
import deckData from './Deck.json';

class App extends Component {

  state = {
    numOfCards: 0,
    cards: []
  };

  componentDidMount() {

    const loadDeck = () => JSON.parse(JSON.stringify(deckData));
    const {deck} = loadDeck();

    this.setState({
      deck: deck
    });
  }

  makeCard = () => {
    const daCard = this.state.deck[Math.floor(Math.random() * this.state.deck.length)];

    daCard.flipped = Math.random() < 0.5;

    this.setState({
      numOfCards: this.state.numOfCards + 1,
      cards: this.state.cards.concat(daCard),
      deck: this.state.deck.filter(card => card !== daCard)
    });
  }

  render() {

    const theCards = this.state.cards.map( (card, i) => {
      return <Card key={i} cardData={this.state.cards[i]} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Tarokka Reading</h1>
        </header>
        <main className="App-main">
          <button className="make-cards" onClick={() => this.makeCard(this.state.deck)}>Make a Card!</button>
          <div className="cards-box">
            {theCards}  
          </div>
        </main>
      </div>
    );
  };
}

export default App;
