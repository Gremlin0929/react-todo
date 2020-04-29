import React from 'react';
import './Add.css';
import AddUrl from '../../image/add.svg';

class Add extends React.Component {

  handleAddClick() {
    this.textInput.blur();
    if (this.textInput.value) {
      this.props.addItem(this.textInput.value);
      this.textInput.value = '';
      this.textInput.focus();
    } else {
      alert('Please enter something');
    }
  }

  handleAddEnter(e) {
    if (e.which === 13) {
      this.handleAddClick();
      this.textInput.focus();
    }
  }


  render() {
    return (
      <div className="add-todo">
        <div className="add-icon" onClick={this.handleAddClick.bind(this)}>
          <img src={AddUrl} alt="Add" />
        </div>
        <input className="todo-text" type="text" placeholder="Add a Todo item" ref={input => this.textInput = input} onKeyPress={this.handleAddEnter.bind(this)} />
      </div>
    )
  }
}

export default Add;