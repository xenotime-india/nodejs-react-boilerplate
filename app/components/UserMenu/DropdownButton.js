import React from 'react';

class DropDownButton extends React.Component {
	constructor() {
		super()

		this.state = {
			opened: false
		};
	}

	toggleOpen() {
		// cant use ref in parent, need to use new version of react?
		this.props.toggleOpen();
		let state = this.state;
		state.opened = !state.opened
		this.setState(state);
	}

	render(){

		return(
    <a className="profile-pic" href="#" id={this.props.id} onClick={this.toggleOpen.bind(this)} aria-expanded={this.state.opened}>
      <i className="fa fa-user-circle-o fa-3x user" aria-hidden="true"></i>
    </a>
		)
	}
};


export default DropDownButton;
