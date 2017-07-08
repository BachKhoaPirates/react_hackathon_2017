import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import FightsPage from './components/FightsPage';
import SubcribePage from './components/SubscribePage';
import MyNavbar from './components/Navbar';

class App extends Component {
  render() {
    return(
      <section>
        <MyNavbar/>
        {React.cloneElement(this.props.children, this.props)}
      </section>
    );
  }
}

export default App;
