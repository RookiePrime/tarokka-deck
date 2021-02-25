import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
      const {cardData} = this.props;
      const {imageUrl} = cardData;

      return (
        <div className="card">
          <div className="pic-box" style={
            {
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/card_${imageUrl})`,
              transform: !cardData.flipped ? `rotate(180deg)` : `rotate(0deg)`
            }
          }></div>
        </div>
      );
    }
}

export default Card;