import React from 'react';
import { Link } from 'react-router'
import UserMenu from './../UserMenu';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top m-b-0">
        <div className="navbar-header">
          <div className="top-left-part">
            <Link to='/' className="logo"><b>Force Test</b></Link>
          </div>
          <ul className="nav navbar-top-links navbar-right pull-right">
            <li>
              <UserMenu/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
