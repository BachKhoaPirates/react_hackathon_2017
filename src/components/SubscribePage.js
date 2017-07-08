import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Form } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';

class SubcribePage extends Component{
    render() {
        return (
            <div>
                <br/><br/><br/>
                <Grid>
                    <Row>
                        <h2>SubscribePage</h2>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form inline>
                                <FormGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter text"
                                    />
                                    <FormControl.Feedback />
                                    <Button type="submit">
                                        Search
                                    </Button>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md={8}>
                        
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default SubcribePage;