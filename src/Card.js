import React from 'react';
import './Card.css';

const Card = props => {
  const {cardData, cardNum} = props;
  const {description} = cardData;

    return (
      <div className="card" id={`card${cardNum}`} onClick={() => revealCard(`card${cardNum}`, cardData)}>
        <div className="order">{cardNum + 1}</div>
        <div className="pic-box" style={
          {
            transform: !cardData.flipped ? `rotate(180deg) scaleX(-1)` : `rotate(0deg) scaleX(-1)`
          }
        }>
          <div className="text-box" style={
            {
              transform: !cardData.flipped ? `rotate(180deg)`:  `rotate(0deg)`
            }
          }><p>{description}</p></div>
        </div>
      </div>
    );
}

const revealCard = (cardNum, cardData) => {
  const daCard = document.getElementById(cardNum);
  const daPicBox = daCard.children[1];

  daCard.className = "card revealed";
  daCard.children[0].innerHTML = "";

  setTimeout(() => {
    daPicBox.style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/card_${cardData.imageUrl})`;
  }, 200);
}

export default Card;