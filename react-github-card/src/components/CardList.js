import React from 'react';
// import '../App.css';
import { Container, Grid } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import UserCard from "./Card";

class CardList extends React.Component  {

    constructor() {
        super();
        this.state = {}
      }

render() {
    return (
        <section>
            <Container text>
                <Grid relaxed columns={2} divided="vertically">
                    <Grid.Row padded="vertically" columns={2}>
                        {this.props.userArray.map(user => {
                                // console.log(user);
                                return (
                                <UserCard userArray={user} />
                                );
                            })}
                    </Grid.Row>
                </Grid>
            </Container>
      </section>
    );
    }
  }

export default CardList;
