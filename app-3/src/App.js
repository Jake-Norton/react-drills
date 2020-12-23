import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    let showList = this.state.list.filter((element, index) => {
      return element.includes(this.state.keyword)
    }).map((element, index) => {return <h6 key={index}>{element}</h6>})

    return (
      <div className="App">
        <h4>The List: Filterable Edition</h4>
        <input onChange={e => this.handleChange(e.target.value)} type='text'/>
        {showList}
      </div>
    );
  }

  constructor () {
    super ();

    this.state = {
      keyword: '',
      list: ['Iron Monger', 'Abomination', 'Whiplash', 'Loki', 'Red Skull', 'Loki']
    }
  }

  handleChange (input) {
    this.setState({keyword: input});
  }
}

export default App;
