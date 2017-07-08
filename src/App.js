import React, { Component } from 'react';
import MyNavbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <section>
        <MyNavbar/>
        {React.cloneElement(this.props.children, this.props)}
      </section>
    );
  }
}

export default App;
