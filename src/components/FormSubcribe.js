import React, {Component} from "react"
import {Form, Container} from "semantic-ui-react"

class FormSubcribe extends Component {
  constructor(props){
    super(props)
    this.state = {name: "", submittedName: ""}
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = e => {
    const {handleSubscribe} = this.props
    const {name} = this.state
    const profile = {name: name, image: "http://nulis.co.id/wp-content/uploads/2017/05/bright-cool-eye-eyewear-face-glasses-smile-sun-sunglasses-emoji-3e068b158b25a0c2-512x512.png"}
    handleSubscribe(profile)
    this.setState({submittedName: name, name: ""})
  }

  render() {
    const {name,submittedName} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange}/>
          <Form.Button content='Subscribe' />
        </Form.Group>
      </Form>
    )
  }
}

export default FormSubcribe
