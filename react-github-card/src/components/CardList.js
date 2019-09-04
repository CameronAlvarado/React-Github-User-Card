import React from 'react';
import '../App.css';
import { Container, Grid } from "semantic-ui-react";
import UserCard from "./Card";

class CardList extends React.Component  {

    constructor() {
        super();
        this.state = {}
      }

render() {
    return (
      <div className="CardList">
        <h2>Cardlist Component</h2>
        <Container text>
            <Grid relaxed columns={2} divided="vertically">
                <Grid.Row padded="vertically" columns={3}>
                    {this.props.userArray.map(user => {
                            console.log(user);
                            return (
                            <UserCard userArray={user} />
                            );
                        })}
                </Grid.Row>
            </Grid>
        </Container>
      </div>
    );
    }
  }

export default CardList;
