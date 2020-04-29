import React from 'react';
import './List.css';
import notChecked from '../../image/notChecked.svg';
import checked from '../../image/checked.svg';
import del from '../../image/delete.svg';

class List extends React.Component {

  handleItemchecked(index, value) {
    this.props.changeItem(index, value);
  }

  handleItemDelete(index, e, value) {
    e.stopPropagation();
    this.props.deleteItem(index, value);
  }

  render() {
    return (
      <div className="todo-list">
        <div className="todo-left">
          <div className="todo-title">To do</div>
          {this.props.todoList.map((item, index) => (
            <div className="list-item" key={index} onClick={this.handleItemchecked.bind(this, index, 'todo')}>
              <div className="item-content">
                <span className="item-icon">
                  <img src={item.checked ? checked : notChecked} alt="" />
                </span>
                <span className={item.checked ? 'checked' : ''}>{item.title}</span>
              </div>
              <span className="delete-item" onClick={e => this.handleItemDelete(index, e, 'todo')}>
                <img src={del} alt="" />
              </span>
            </div>)
          )}
        </div>
        <div className="todo-right">
          <div className="todo-title">Done</div>
          {this.props.doneList.map((item, index) => (
            <div className="list-item" key={index} onClick={this.handleItemchecked.bind(this, index, 'done')}>
              <div className="item-content">
                <span className="item-icon">
                  <img src={item.checked ? checked : notChecked} alt="" />
                </span>
                <span className={item.checked ? 'checked' : ''}>{item.title}</span>
              </div>
              <span className="delete-item" onClick={e => this.handleItemDelete(index, e, 'done')}>
                <img src={del} alt="" />
              </span>
            </div>)
          )}
        </div>
      </div>
    );
  }
}

export default List;