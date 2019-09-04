import React from 'react';
import '../App.css';
import { Card, Grid, Image } from "semantic-ui-react"


class UserCard extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
    //   <div className="Card">
    //     <h3>Card Component</h3>
    //     <h1>{this.props.userArray.name}</h1>
    //     <h1>login: {this.props.userArray.login}</h1>
    //     <h1>followers: {this.props.userArray.followers}</h1>
    //     <h1>following: {this.props.userArray.following}</h1>
    //   </div>
      <Grid.Column>
      <Card className='cards'>
      <Image src={this.props.avatar_url} wrapped ui={false} />
          <Card.Content>
              <Card.Header>
                  {this.props.userArray.name}
              </Card.Header>
              <Card.Meta>
                login: {this.props.userArray.login}
              </Card.Meta>
              <Card.Description>
              followers: {this.props.userArray.followers}
                </Card.Description>
                <Card.Description>
                following: {this.props.userArray.following}
                </Card.Description>
          </Card.Content>
      </Card>
  </Grid.Column>
    );
  }
}

export default UserCard;
