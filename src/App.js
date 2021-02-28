import React, {Component} from 'react';
import './App.css';
import Card from './Card';
import deckData from './Deck.json';

class App extends Component {

  state = {
    numberOfCards: 0,
    cards: []
  };

  componentDidMount() {

    const loadDeck = () => JSON.parse(JSON.stringify(deckData));
    const {commonDeck, highDeck} = loadDeck();

    this.setState({
      commonDeck: commonDeck,
      highDeck: highDeck
    });
  }

  getReading = number => {
    // Wipe out the current reading
    // document.getElementById(`cards-box`).innerHTML="";
    // Get the 3 commons and 2 highs
    if (this.state.numberOfCards < 3) {
      this.makeCard(`common`);
    } else {
      this.makeCard(`high`);
    }

    if (number > 3) {
      document.getElementById(`make-cards`).style.pointerEvents = "none";
      document.getElementById(`make-cards`).textContent = "";
    }
    // Position them on the board
  }

  makeCard = which => {
    let daCard = 0;
    //Ternary for the which
    which === `common` ? daCard = this.state.commonDeck[Math.floor(Math.random() * this.state.commonDeck.length)] : daCard = this.state.highDeck[Math.floor(Math.random() * this.state.highDeck.length)];
  
    daCard.flipped = Math.random() < 0.5;
    
    this.setState({
      numberOfCards: this.state.numberOfCards + 1,
      cards: this.state.cards.concat(daCard),
      commonDeck: this.state.commonDeck.filter(card => card !== daCard),
      highDeck: this.state.highDeck.filter(card => card !== daCard)
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
          <button className="make-cards" id="make-cards" onClick={() => this.getReading(this.state.numberOfCards)}>See your Fortune!</button>
          <div id="cards-box">
            {theCards}  
          </div>
        </main>
      </div>
    );
  };
}

export default App;
