import React, { Component } from 'react';
import { Grid, Button, Form, Input, Container, Image, Item, Card, List, Segment, Feed, Icon } from 'semantic-ui-react';
import ListSubcriber from "./ListSubcriber"
import NewFeed from "./NewFeed"
import FormSubcribe from "./FormSubcribe"

class SubcribePage extends Component{
    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                          <ListSubcriber></ListSubcriber>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment>
                            <NewFeed></NewFeed>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default SubcribePage;
