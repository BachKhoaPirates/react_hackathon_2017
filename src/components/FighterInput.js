import React, {Component} from "react"
import FighterInfo from "./FighterInfo"
import {Button, Input, Container} from "semantic-ui-react"


class FighterInput extends Component {
  constructor(props){
    super(props)
    this.state = {userInfo: false}
  }

  getUserInfo = () => {
    this.state.userInfo = !this.state.userInfo
    this.setState(this.state)
    if(this.props.player === 1){
      this.props.player1LoadSuccess(1);
    }
    if(this.props.player === 2){
      this.props.player2LoadSuccess(2);
    }
  }

  render() {
    if(!this.state.userInfo){
      return (
        <Container>
          <h1>Player 1</h1>
            <Input type="text" icon="search" placeholder='Search...' ref="txt" />
            <br/>
            <br/>
            <Button basic color="black" onClick={this.getUserInfo.bind(this)}>Submit</Button>
        </Container>
      )
    }
    return (
      <FighterInfo {...this.props}></FighterInfo>
    )
  }
}

export default FighterInput
