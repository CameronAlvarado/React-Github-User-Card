import React from 'react';
import './App.css';
import CardList from "./components/CardList";

class App extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className="App">
        <h1>React GitHub Usercard</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
