export const getReading = (commons, setCommons, highs, setHighs) => {
    const reading = [];
  
    for (let i = 0; i < 5; i++) {
      const deck = i < 3 ? commons : highs;
      const card = makeCard(deck);
      
      setCommons(commons.filter(aCard => aCard.name !== card.name));
      setHighs(highs = highs.filter(aCard => aCard.name !== card.name));
  
      reading.push(card);
    }
    return reading;
}
  
export const makeCard = deck => {
    const daCard = deck[Math.floor(Math.random() * deck.length)];
  
    return daCard;
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