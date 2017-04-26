import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.card.title}</h2>
        <p>{this.props.card.text}</p>
        <p>ID: {this.props.card.id}</p>
      </div>
    );
  }
}

export default Card;
