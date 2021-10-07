export const getReading = masterDeck => {
    const reading = [];
    let commonDeck = [...masterDeck.commonDeck];
    let highDeck = [...masterDeck.highDeck];
  
    for (let i = 0; i < 5; i++) {
      const deck = i < 3 ? commonDeck : highDeck;
      const card = makeCard(deck);

      reading.push(card[0]);
    }

    return reading;
}

export const makeCard = deck => {
  const j = Math.floor(Math.random() * deck.length - 1);
  const card = deck.splice(j, 1);      
  card[0].flipped = Math.random() > 0.5;
  return card;
}

export const revealCard = (cardNum, cardData) => {
    const daCard = document.getElementById(cardNum);
    const daPicBox = daCard.children[1];
    const cardPic = require(`../assets/cards/card_${cardData.imageUrl}`);
  
    daCard.className = "card revealed";
    daCard.children[0].innerHTML = "";
  
    setTimeout(() => {
      daPicBox.style.backgroundImage = `url(${cardPic.default})`;
    }, 200);
}