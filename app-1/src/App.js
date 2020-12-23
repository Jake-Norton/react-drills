import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h4> Copy Machine </h4>
        <input className="inputLine" onChange={e => this.handleChange(e.target.value)} type='text' />
        <p>{this.state.repeat}</p>
      </div>
    )
  };

  constructor () {
    super ();

    this.state = {
      repeat: ''
    };
  };

  handleChange (value) {
    this.setState({repeat: value})
  }
}

export default App;
