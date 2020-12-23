import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  render () {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>
    })

    return (
      <div className="App">
        <h1>The List: To-Do Edition</h1>
        <div>
          <input value={this.state.input} placeholder='Enter new task' onChange={e => this.handleInputChange(e.target.value)}/>
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }

  constructor () {
    super ();

    this.state = {
      list: [],
      input: ''
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState ({input: value})
  }

  handleAddTask () {
    this.setState ({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
}

export default App;
