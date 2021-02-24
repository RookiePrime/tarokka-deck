import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        const {imageUrl} = cardData;

        return (
          <div className="card" style={
            {
              backgroundImage: `url(${imageUrl})`
            }
          }>
          </div>
         );

    }
}

export default Card;