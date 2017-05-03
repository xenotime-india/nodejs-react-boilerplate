/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import UserDropdown from './UserDropdown';

export class UserMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      demo : [
        {
          text: "Hello User",
          value: "1"
        },
        {
          text: "Log Out",
          value: "2"
        }
      ]
    };
  }

  select(item){
    alert(item.text+","+item.value);
  }

  render() {
    const { loading, error } = this.props;

    return (
      <UserDropdown
        title="MyDropdown"
        items={this.state.demo}
        onSelect={this.select} />
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default UserMenu;
