import React from 'react';
import '../App.css';
import { Container, Grid } from "semantic-ui-react";
import Card from "./Card";

function CardList(props) {

    return (
      <div className="CardList">
        <h2>Cardlist Component</h2>
        <Container text>
            <Grid relaxed columns={2} divided="vertically">
                <Grid.Row padded="vertically" columns={3}>
                    {props.userArray.map(user => {
                            console.log(user)
                            return (
                                <h1>{user.login}</h1>
                            // <Card
                            // userArray={props.userArray}
                            //     // className="cards"
                            //     // image={user.avatar_url}
                            //     // key={user.id}
                            //     // name={user.name}
                            //     // species={user.species}
                            //     // gender={user.gender}
                            //     // id={user.id}
                            //     // status={user.status}
                            //     // url={user.url}
                            // />
                            );
                        })}
                </Grid.Row>
            </Grid>
        </Container>
      </div>
    );
  }

export default CardList;
