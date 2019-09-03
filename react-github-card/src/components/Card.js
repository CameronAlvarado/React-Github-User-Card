import React from 'react';
import '../App.css';

class Card extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="Card">
        <h3>Card Component</h3>
      </div>
    );
  }
}

export default Card;
