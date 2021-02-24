import React, {Component} from 'react';
import './Card.css';
import cardPictures from './assets';

class Card extends Component {
    render() {
        const {cardData} = this.props;
        const {imageUrl} = cardData;

        return (
          <div className="card" style={
            {
              backgroundImage: `url('./logo.svg')`
            }
          }>
          </div>
         );

    }
}

export default Card;