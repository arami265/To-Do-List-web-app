import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
  }

  render() {
    return (
      <form style={{marginTop: '5px'}}
      onSubmit={this.onSubmit}>
        <div>
            <input type='text'
            name='title'
            placeholder='New To-Do item...'
            style={{padding: '5px', width: '100%'}}
            value={this.state.title}
            onChange={this.onChange} />
        </div>
        
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
            <input className='addTodoButton'
            type='submit'
            value='Add' />
        </div>
      </form>
    )
  }
}

export default AddTodo
