import React from 'react';
import './App.css';
import axios from 'axios';
import CardList from "./components/CardList";

class App extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    const URL = 'https://api.github.com/users/CameronAlvarado/followers'
    axios.get(URL)
      .then(response => {
        console.log(response.data)
        response.json()})
      .then(response => this.setState({}))
      .catch(err => console.log('noooo'));
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
