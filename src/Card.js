import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        const {imageUrl} = cardData;
        console.log(imageUrl);
        return (
          <div className="card" carddata={cardData} style={
            {
              backgroundImage: `url(${imageUrl})`
            }
          }>
          </div>
         );

    }
}

export default Card;