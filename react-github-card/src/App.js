import React from 'react';
import './App.css';
import axios from 'axios';
import CardList from "./components/CardList";

class App extends React.Component  {

  constructor() {
    super();
    this.state = {
      users: [],
      loginArray: []
    }
    console.log(this.state.loginArray)
  }

  componentDidMount() {
    const URL = 'https://api.github.com/users/CameronAlvarado/followers'
    axios.get(URL)
      .then(response => {
        console.log(response.data);
        this.setState({
          users: response.data
        })
        console.log(this.state.users)
      })
      .catch(err => console.log('error'));
      axios.get(`https://api.github.com/users/${this.state.users}`)
      .then(response => {
        this.setState({
          loginArray: response.data
        })
      })
      .catch(err => console.log("noooo"));
    };

  render() {
    return (
      <div className="App">
        <h1>React GitHub Usercard</h1>
        <CardList
          userArray={this.state.users} />
      </div>
    );
  }
}

export default App;
