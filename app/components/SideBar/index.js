import React from 'react';
import { FormattedMessage } from 'react-intl';

class SideBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav slimscrollsidebar">
          <div className="sidebar-head">
            <h3><span className="fa-fw open-close"><i className="ti-close ti-menu"></i></span> <span className="hide-menu">Navigation</span></h3>
          </div>
          <ul className="nav" id="side-menu">
            <li style={{padding: '70px 0 0'}}>
              <a href="index.html" className="waves-effect"><i className="fa fa-clock-o fa-fw" aria-hidden="true"></i>Dashboard</a>
            </li>
            <li>
              <a href="profile.html" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i>Profile</a>
            </li>
            <li>
              <a href="basic-table.html" className="waves-effect"><i className="fa fa-table fa-fw" aria-hidden="true"></i>Basic Table</a>
            </li>
            <li>
              <a href="fontawesome.html" className="waves-effect"><i className="fa fa-font fa-fw" aria-hidden="true"></i>Icons</a>
            </li>
            <li>
              <a href="map-google.html" className="waves-effect"><i className="fa fa-globe fa-fw" aria-hidden="true"></i>Google Map</a>
            </li>
            <li>
              <a href="blank.html" className="waves-effect"><i className="fa fa-columns fa-fw" aria-hidden="true"></i>Blank Page</a>
            </li>
            <li>
              <a href="404.html" className="waves-effect"><i className="fa fa-info-circle fa-fw" aria-hidden="true"></i>Error 404</a>
            </li>

          </ul>
        </div>

      </div>
    );
  }
}

export default SideBar;
