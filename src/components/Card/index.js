import React from 'react';
import './Card.css';
import { revealCard } from '../../utils';

const Card = ({ cardData, cardNum }) => (
    <div className="card" id={`card${cardNum}`} onClick={() => revealCard(`card${cardNum}`, cardData)}>
      <div className="order">{cardNum + 1}</div>
      <div className="pic-box" style={{ transform: `scaleX(-1)` }}>
        <div className="text-box" style={{ transform: `rotate(0deg)` }}><p>{ cardData.description }</p></div>
      </div>
    </div>
);

export default Card;