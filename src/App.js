import React, { Component } from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
state = {
  todos: [
    // {
    //   id: uuid.v4(),
    //   title: 'Call HR',
    //   completed: false
    // },
    // {
    //   id: uuid.v4(),
    //   title: 'Wash dishes',
    //   completed: false
    // },
    // {
    //   id: uuid.v4(),
    //   title: 'Take out the trash',
    //   completed: false
    // }
  ]
}

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className='App'>
      <Header />
        <div className='container'>
          <Todos todos = {this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo = {this.deleteTodo} />

          <AddTodo addTodo = {this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
