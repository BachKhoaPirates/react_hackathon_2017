import React, {Component} from "react"
import {List, Button, Image, Container} from "semantic-ui-react"
import SubscribeItem from "./SubscribeItem"
import FormSubcribe from "./FormSubcribe"

class ListSubcriber extends Component {
  constructor(props){
    super(props)
    this.state = {profile: [{name: "Tran B. V. Son", image: "http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png"},
                            {name: "Pham N. Thach", image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"},
                            {name: "Nguyen T. Minh", image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a9475211889067.562541caf0859.png"},
                            {name: "Do T. Kien", image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/39c17711889067.562541cc490c7.png"}]}
  }

  remove = (index) => {
    this.state.profile.splice(index, 1)
    this.setState(this.state)
  }

  addProfile = (profile) => {
    console.log(profile);
    this.state.profile.push(profile)
    this.setState(this.state)
  }
  render() {
    return (
      <Container>
        <FormSubcribe handleSubscribe = {this.addProfile.bind(this)}/>
        <List divided verticalAlign='middle'>
          {this.state.profile.map((e, i) => <SubscribeItem
            index={i}
            handleRemove={this.remove.bind(this)}
          >{e}</SubscribeItem>)}
        </List>
      </Container>
    )
  }
}

export default ListSubcriber
