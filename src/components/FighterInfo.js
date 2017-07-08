import React, {Component} from "react"
import {Image, Button} from "react-bootstrap"
import FighterInput from "./FighterInput"


class FighterInfo extends Component {
  constructor(props){
    super(props)
    this.state = {userInput: false}
  }

  resetUserInput = () => {
    this.state.userInput = !this.state.userInput
    this.setState(this.state)
  }

  render(){
    if(!this.state.userInput){
      return (
        <div>
          <br/>
          <br/>
          <br/>
          <Image src="https://www.w3schools.com/css/img_fjords.jpg" circle />
          <p>tbvson</p>
          <Button onClick={this.resetUserInput.bind(this)}>reset</Button>
        </div>
      )
    }
    return (
      <FighterInput></FighterInput>
    )
  }
}
export default FighterInfo
