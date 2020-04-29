import React from 'react';
import './Header.css';
import Logo from '../../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="todo-header">
        <div className="header-content wrapper">
          <div className="header-left">
            <div className="todo-logo">
              <img src={Logo} alt="To Do" />
            </div>
            <div className="todo-title">To Do</div>
          </div>
          <div className="header-right">
            <span className="description">A ToDo list for your work</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;