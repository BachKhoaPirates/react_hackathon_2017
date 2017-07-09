import React, { Component } from "react"
import {List, Button, Image} from "semantic-ui-react"

class SubscribeItem extends Component {
  removeSubcribe = () => {
    const {index, handleRemove} = this.props
    handleRemove(index)

  }
  render() {
    return (
      <List.Item>
        <List.Content floated='right'>
          <Button onClick={this.removeSubcribe.bind(this)}>Unsubcribe</Button>
        </List.Content>
        <Image avatar src={this.props.children.image} />
        <List.Content>
          {this.props.children.name}
        </List.Content>
      </List.Item>
    )
  }
}

export default SubscribeItem
