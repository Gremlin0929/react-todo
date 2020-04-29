import React from 'react';
import TodoHeader from './Components/Header/Header';
import Add from './Components/Add/Add';
import List from './Components/List/List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.getItemContent = this.getItemContent.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.state = {
      todoList: [],
      doneList: []
    }
  }

  getItemContent(e) {
    this.setState({
      todoList: [...this.state.todoList, {title: e, checked: false}]
    })
  }

  changeItemStatus(index, value) {
    const todolist = [...this.state.todoList];
    const donelist = [...this.state.doneList];
    if (value === 'todo') {
      todolist.forEach((e, i) => {
        if (index === i) {
          e.checked = !e.checked;
          todolist.splice(i, 1);
          donelist.unshift(e);
        }
      });
    } else {
      donelist.forEach((e, i) => {
        if (index === i) {
          e.checked = !e.checked;
          donelist.splice(i, 1);
          todolist.push(e);
        }
      });
    }
    
    this.setState({
      todoList: todolist,
      doneList: donelist
    })
  }


  handleDeleteItem(index, value) {
    const todolist = [...this.state.todoList];
    const donelist = [...this.state.doneList];
    if (value === 'todo') {
      todolist.splice(index, 1);
    } else {
      donelist.splice(index, 1);
    }
    this.setState({
      todoList: todolist,
      doneList: donelist
    })
  }

  render() {
    return (
      <div className="Todo">
        <TodoHeader />
        <List
          todoList={this.state.todoList}
          doneList={this.state.doneList}
          changeItem={this.changeItemStatus}
          deleteItem={this.handleDeleteItem}
        />
        <Add addItem={this.getItemContent} />
      </div>
    )
  }
}

export default Todo;
