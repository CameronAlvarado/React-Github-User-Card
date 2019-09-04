import React from 'react';
// import '../App.css';
import { Card, Grid, Image } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';


class UserCard extends React.Component  {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
        <Grid.Column>
            <Card color='orange'>
                <Image src={this.props.userArray.avatar_url} size='medium' />
                <Card.Content>
                    <Card.Header>
                        {this.props.userArray.name}
                    </Card.Header>
                    <Card.Meta>
                        Login: {this.props.userArray.login}
                    </Card.Meta>               
                    <Card.Description>
                        Location: {this.props.userArray.location}
                    </Card.Description>
                    <Card.Description>
                        Followers: {this.props.userArray.followers}
                    </Card.Description>
                    <Card.Description>
                        Following: {this.props.userArray.following}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
  }
}

export default UserCard;
