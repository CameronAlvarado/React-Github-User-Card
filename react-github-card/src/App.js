import React from 'react';
import './App.css';
import axios from 'axios';
import CardList from "./components/CardList";

class App extends React.Component  {

  constructor() {
    super();
    this.state = {
      users: [],
    }
    // console.log(this.state.users);
  }

  componentDidMount() {
    const URL = 'https://api.github.com/users/CameronAlvarado/followers'
    axios.get(URL)
      .then(response => {
        console.log(response.data);
         let newArray =[];
        response.data.forEach( (element) => {
         newArray.push(element.login);        
        });
        // this loops through the new array and plugs the logins into the url.
          newArray.forEach(username => {
              axios.get([`https://api.github.com/users/${username}`])
              .then( (response) => {
                // console.log(response.data);
                this.setState({
                  users: [...this.state.users, response.data]
                })
                console.log(this.state.users);
              })
              .catch( (err) => {
                console.log(err);
              });
          });
      })
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
