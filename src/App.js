import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = { searching: false, dog: null }

  click = async () => {
    this.setState({ searching: true })
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => res.data)
      .then(dog => this.setState({ dog }))
      .then(() => this.setState({ searching: false }))
  }

  render() {
    const { dog } = this.state

    return (
      <div className="App">
        <button data-test="button" onClick={this.click}>CLICK</button>
        <img data-test="img" src={dog ? dog.message: ''} />
      </div>
    );
  }
}

export default App;
