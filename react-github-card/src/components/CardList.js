import React from 'react';
import '../App.css';
import Card from "./Card";

class CardList extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="CardList">
        <h2>Cardlist Component</h2>
        <Card />
      </div>
    );
  }
}

export default CardList;
