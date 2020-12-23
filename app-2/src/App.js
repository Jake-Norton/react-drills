import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render () {
    let showList = this.state.list.map(
      (element, index) => {
        return <h2 key={index}>{element}</h2>
      }
    )

    return (
      <div className="App">
        <h4>The List</h4>
        {showList}
      </div>
    )
  }

  constructor () {
    super();

    this.state = {
      list: ['Hartnell', 'Troughton', 'Pertwee', 'Baker', 'Davison', 'Baker', 'McCoy', 'McGann', 'Hurt', 'Eccleston', 'Tennant', 'Smith', 'Capaldi', 'Whittaker']
    }
  }
}

export default App;
