export const getReading = (commons, highs) => {
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
  
export const makeCard = deck => {
    const daCard = deck[Math.floor(Math.random() * deck.length)];
  
    daCard.flipped = Math.random() > 0.5;
  
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

export const registerServiceWorker = () => {
  if ('serviceWorker in navigator' && process.env.NODE_ENV === 'production') {
    navigator.serviceWorker
      .register('%PUBLIC_URL%/service-worker.js')
      .then(() => console.log('Service Worker registered successfully'))
      .catch(error => console.log('Service Worker failed to register. Error: ', error));
  }
}