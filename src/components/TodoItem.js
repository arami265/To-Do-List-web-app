import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unchecked from './../img/baseline_check_box_outline_blank_black_18dp.png';
import checked from './../img/baseline_check_box_black_18dp.png';
import deleteButton from './../img/baseline_clear_black_18dp.png';

export class TodoItem extends Component {
  getDynamicTodoStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  getCheckboxImg = () =>  this.props.todo.completed ? checked : unchecked;
  
  render() {
    const { id, title } = this.props.todo;

    return (
      <div className='todoItem'>
        <span className='todoItemContents'>
          <span className = 'clickableTodo'
          onClick={this.props.toggleComplete.bind(this, id)}>
            <img src={this.getCheckboxImg()} alt ='checkbox' /> {' '}
            <span className = 'todoItemText'
            style={this.getDynamicTodoStyle()}>
              { title }
            </span>
          </span>

          <span>
            <img className='deleteButton'
            src={deleteButton}
            alt ='delete'
            onClick={this.props.deleteTodo.bind(this, id)}
            style={{float: 'right'}} />
          </span>
        </span>
      </div>
    )
  }

}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
