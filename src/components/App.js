import React, {Component} from 'react';
import Header from './Header.js';
// import Counter from './Counter.js';
import Task from './Task.js';


class App extends React.Component {
  state = {
    tasks: [
      { 
        id: 1,
        name: "Coffee",
        number: 0,
      },
      { 
        id: 2,
        name: "Milk",
        number: 0,
      },
      {
        id: 3,
        name: "Apple",
        number: 0,
      },
      {
        id: 4,
        name: "Onions",
        number: 0,
      }
    ]
  };

  handleChangeTask = (index, delta) => {
    this.setState( prevState => ({
      number: prevState.tasks[index].number += delta
    }))
  }

  handleRemoveTask = (id) => {
    this.setState(prevState => {
      return {
      tasks: prevState.tasks.filter(p => p.id !== id)
      };
    });
  }

  // incrementScore = () => {
  //   this.setState (prevState => ({
  //     number:prevState.number + 1
  //   }));
  // }

  render() {
    return (
      <div className="list">

      <Header 
      title="Shopping list" 
      totalTask = { this.state.tasks.length }
      />

      { this.state.tasks.map((task, index) => 
      <Task 
      index = {index}
      name = {task.name}
      number  = {task.number} 
      id = {task.id}
      key = {task.id.toString()}
      changeTask = { this.handleChangeTask }
      removeTask = { this.handleRemoveTask }
      /> 
    )}
      </div> 
    )
  }
}


export default App;
