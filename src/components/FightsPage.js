import React, { Component } from "react";
import FighterInput from "./FighterInput";
import { Grid, Container, Button } from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as action from '../actions';

class FightsPage extends Component{
  constructor(props){
    super(props)
    this.renderFightButton = this.renderFightButton.bind(this)
  }

  renderFightButton(){
    return(
      <Container>
        <Grid centered>
          <Grid.Row>
            <Button negative>Fight</Button>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

  render() {
    return (
      <section>
        <Container>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={8}>
                <FighterInput {...this.props}></FighterInput>
              </Grid.Column>
              <Grid.Column width={8}>
                <FighterInput {...this.props}></FighterInput>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        {this.props.data.num === 2 ? this.renderFightButton():``}
      </section>
    );
  }
}

function mapStatetoProp(state, props){
  console.log(state);
  return {
    data: state.fighterReducer
  }
}

function mapDispathtoProps(dispatch){
  return bindActionCreators(action, dispatch);
}

export default connect(mapStatetoProp, mapDispathtoProps)(FightsPage);
