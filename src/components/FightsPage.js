import React, { Component } from "react";
import FighterInput from "./FighterInput";

class FightsPage extends Component{
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <FighterInput></FighterInput>
        <FighterInput></FighterInput>
      </div>
    );
  }
}

export default FightsPage;
