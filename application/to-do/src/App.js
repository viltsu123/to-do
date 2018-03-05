import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], desc: '', date: '', log:{desc: '', date: ''}}
  }

  inputChanged = (event) => {
    this.setState({desc: event.target.value});
  }

  inputChangedDate = (event) => {
    this.setState({date: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({log:{desc: this.state.desc, date: this.state.date}});
    this.setState({
      todos: [...this.state.todos, this.state.log]
    });
  }

  deleteFromList(id){
    alert('this is your id ' + id.index);
    this.state.todos.splice(id.index, 1);
    this.setState({todos: this.state.todos});
  }

  render() {
    const row = this.state.todos.map((item, index) =>
    <tr key={index}>
        <td>{item.date}</td>
        <td>{item.desc}</td>
        <td><button onClick={this.deleteFromList.bind(this, {index})}>Delete</button></td>
    </tr>
  )
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo} title="DateBook">
            <h4>Date: </h4>
            <input type="text" onChange={this.inputChangedDate} value={this.state.date}/>
            <h4>Description: </h4>
            <input type="text" onChange={this.inputChanged} value={this.state.desc}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        <table style={{border: 'solid', borderWidth: 1}}>
          <tbody>
            <tr>
              <td>
              <p style={{fontWeight: 'bold'}}>Date</p>
              </td>
              <td>
                <p style={{fontWeight: 'bold'}}>Description</p>
              </td>
            </tr>
            {row}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
