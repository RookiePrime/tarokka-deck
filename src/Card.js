import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
      const {cardData} = this.props;
      const {name, imageUrl, description} = cardData;

      return (
        <div className="card">
          <div className="pic-box" alt={name} style={
            {
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/card_${imageUrl})`,
              transform: !cardData.flipped ? `rotate(180deg)` : `rotate(0deg)`
            }
          }>
            <div className="text-box" style={
              {
                transform: !cardData.flipped ? `rotate(180deg)` : `rotate(0deg)`
              }
            }><p>{description}</p></div>
          </div>
        </div>
      );
    }
}

export default Card;