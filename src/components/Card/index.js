import React from 'react';
import './Card.css';
import { revealCard } from '../../utils';

const Card = ({ cardData, cardNum }) => {
  const { description } = cardData;

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
          }><p>{ description }</p></div>
        </div>
      </div>
    );
}

export default Card;