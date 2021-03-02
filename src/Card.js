import React from 'react';
import './Card.css';

const Card = props => {
  const {cardData} = props;
  const {imageUrl, description} = cardData;

    return (
      <div className="card">
        <div className="pic-box" style={
          {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/card_${imageUrl})`,
            transform: !cardData.flipped ? `rotate(180deg)` : `rotate(0deg)`
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

export default Card;