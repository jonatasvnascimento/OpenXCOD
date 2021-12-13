import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { MenuItems } from './MenuItems';
import './NavbarStyle.css';

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="NavbarItems">
        <h1 className="navbar-logo">
          <Link className="spanLogo" to="/">
            <span className="">Open</span>
          </Link>
          <Link className="spanLogo" to="/">
            <span className="">X</span>
          </Link>
          <Link className="spanLogo" to="/">
            <span className="">COD</span>
          </Link>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Button>Entrar</Button> */}
      </div>
    );
  }
}
