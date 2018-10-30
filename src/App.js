import React, { Component } from 'react';
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import { firebase } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <div>
        <Navbar authUser={this.state.authUser} />
        <Main authUser={this.state.authUser} />
      </div>
    )
  }
}

export default App;