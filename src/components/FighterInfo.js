import React, {Component} from "react"
import {Image, Button} from "semantic-ui-react"
import FighterInput from "./FighterInput"


class FighterInfo extends Component {
  constructor(props){
    super(props)
    this.state = {userInput: false}
  }

  resetUserInput = () => {
    this.state.userInput = !this.state.userInput
    this.setState(this.state)
    this.props.removePlayer();
  }

  render(){
    if(!this.state.userInput){
      return (
        <div>
          <Image src="https://www.w3schools.com/css/img_fjords.jpg" shape='circular' size='tiny'/>
          <p>tbvson</p>
          <Button onClick={this.resetUserInput.bind(this)}>reset</Button>
        </div>
      )
    }
    return (
      <FighterInput {...this.props}></FighterInput>
    )
  }
}
export default FighterInfo
