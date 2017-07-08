import React, { Component } from 'react';
import { Grid, Button, Form, Input, Container, Image, Item, Card, List, Segment } from 'semantic-ui-react';

class SubcribePage extends Component{
    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Container>
                                <Form>
                                    <Form.Group>
                                        <Form.Input placeholder='Search....'/>
                                        <Form.Button content='Add' />
                                    </Form.Group>
                                </Form>
                                <List celled>
                                    <List.Item>
                                        <Image avatar src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/13344666_2102900209934244_603430536861366406_n.jpg?oh=676ae5c13ccb59577f6e4df16480110c&oe=59C7B4EE' />
                                        <List.Content>
                                            <List.Header>pnt</List.Header>
                                            Pham Ngoc Thach
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <Image avatar src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/13344666_2102900209934244_603430536861366406_n.jpg?oh=676ae5c13ccb59577f6e4df16480110c&oe=59C7B4EE' />
                                        <List.Content>
                                            <List.Header>pnt</List.Header>
                                            Pham Ngoc Thach
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <Image avatar src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/13344666_2102900209934244_603430536861366406_n.jpg?oh=676ae5c13ccb59577f6e4df16480110c&oe=59C7B4EE' />
                                        <List.Content>
                                            <List.Header>pnt</List.Header>
                                            Pham Ngoc Thach
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Segment>
                                <Container className="list-action">
                                    <Item.Group divided>
                                        <Item>
                                            <Item.Image size='tiny' src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/13344666_2102900209934244_603430536861366406_n.jpg?oh=676ae5c13ccb59577f6e4df16480110c&oe=59C7B4EE' />

                                            <Item.Content>
                                                <Item.Header as='a'>Header</Item.Header>
                                                <Item.Meta>Description</Item.Meta>
                                                <Item.Extra>Additional Details</Item.Extra>
                                            </Item.Content>
                                        </Item>

                                        <Item>
                                            <Item.Image size='tiny' src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/13344666_2102900209934244_603430536861366406_n.jpg?oh=676ae5c13ccb59577f6e4df16480110c&oe=59C7B4EE' />

                                            <Item.Content>
                                                <Item.Header as='a'>Header</Item.Header>
                                                <Item.Meta>Description</Item.Meta>
                                                <Item.Extra>Additional Details</Item.Extra>
                                            </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Container>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SubcribePage;