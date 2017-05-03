/**
 * Created by sandeepkumar on 21/04/17.
 */
import React from 'react';
import classSet from 'classnames';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

class UserDropdown extends React.Component{

  constructor(props) {
    super(props);
    this.state = {title: null, open: false};
  }

  /**
   * Update the state if props has changed
   */
  componentWillReceiveProps(nextProps, nextContext) {
    // update title if static and has changed
    if (!this.props.updateTitle && nextProps.title != this.props.title) {
      this.setState({title: nextProps.title, open: this.state.open});
    }
  }

  componentDidMount(){
    this.setState({title: this.props.title, open: false});
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  handleTitleAndSelect(item){

    // update the title state and autoclose (use single state change)
    if (this.props.updateTitle) {
      var state = this.state;
      state.title =  item.text;
      state.open = false;
      this.setState(state);
    } else {
      // close the dropdown
      this.toogleOpen();

    }

    this.props.onSelect(item);
  }

  /**
   * Toggles the visibility of the dropdown
   * @return {[type]} [description]
   */
  toogleOpen() {
    let state = this.state;
    state.open = !state.open;
    this.setState(state);
  }

  render(){
    let id = this._reactInternalInstance._rootNodeID;

    var classes = classSet("dropdown", {
      'open': this.state.open
    });

    return <div className={classes}
                onMouseDown={this.handleMouseDown.bind(this)}
                onMouseUp={this.handleMouseUp.bind(this)}>

      <DropdownButton
        id={id}
        disabled={this.props.disabled}
        toggleOpen={this.toogleOpen.bind(this)}>
      </DropdownButton>
      <DropdownMenu items={this.props.items} onSelect={this.handleTitleAndSelect.bind(this)} id={id}/>
    </div>

  }

  // handle click outside of element

  handleDocumentClick(e) {

    var wasDown = this.mouseDownOnModal;
    var wasUp = this.mouseUpOnModal;
    this.mouseDownOnModal = false;
    this.mouseUpOnModal = false;

    if (!wasDown && !wasUp && this.state.open) {
      this.toogleOpen();
    }

  }

  handleMouseDown() {
    this.mouseDownOnModal = true;
  }

  handleMouseUp() {
    this.mouseUpOnModal = true;
  }
}



export default UserDropdown;
