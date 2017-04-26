import React, { Component } from 'react';

import Card from './card';

class Cards extends Component {
  render() {
    return (<div>
      {this.props.cards.map(item =>
        {
          return <Card key={item.id} card={item} />;
        })
      }
  </div>);

  }
}

export default Cards;
