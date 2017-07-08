import React, {Component} from "react"
import FighterInfo from "./FighterInfo"
import {Button, Input} from "semantic-ui-react"


class FighterInput extends Component {
  constructor(props){
    super(props)
    this.state = {userInfo: false}
  }

  getUserInfo = () => {
    console.log(this.state.userInfo)
    this.state.userInfo = !this.state.userInfo
    this.setState(this.state)
  }

  render() {
    if(!this.state.userInfo){
      return (
        <div>
          <br/>
          <br/>
          <h1>Player 1</h1>
            <Input type="text" icon="search" placeholder='Search...' ref="txt" />
            <br/>
            <br/>
            <Button basic color="black" onClick={this.getUserInfo.bind(this)}>Submit</Button>
        </div>
      )
    }
    return (
      <FighterInfo></FighterInfo>
    )
  }
}

export default FighterInput
