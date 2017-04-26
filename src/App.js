import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './card_list'
import Data from './data'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: Data(),
      currentCard: 5,
    }

    this.addCard = this.addCard.bind(this);
  }

  addCard() {
    this.setState({
      cards: [...this.state.cards, {id: this.state.currentCard, title: "another", text: "blehks"}],
      currentCard: this.state.currentCard + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" onClick={this.addCard}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
