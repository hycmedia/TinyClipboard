import React from 'react';
import {MDCList} from '@material/list';
import {MDCRipple} from "@material/ripple/component";
import {MDCDialog} from "@material/dialog/component";
import {MDCSnackbar} from "@material/snackbar/component";

class ListItem extends React.Component {

  name;
  text;
  ripple;
  rippleItem;
    currentElement;
    snackbar;

  constructor(props) {
      super(props);
      this.ripple = React.createRef();
  }

  render() {
      return <li onClick={() => this.handleClick()} className="mdc-list-item" ref={this.ripple} id={this.props.name}><span className="mdc-list-otem__text">{this.props.name}</span></li>;
    }

  componentDidMount() {
      this.rippleItem = new MDCRipple(this.ripple.current)
  }

  handleClick(e) {
      this.dialog = new MDCDialog(document.querySelector('.paste'));
      this.currentElement = document.getElementById("input-field_paste");
      this.currentElement.value = this.props.name;
      this.currentElement.select();
      document.execCommand("copy");
      this.snackbar = new MDCSnackbar(document.querySelector(".copied"));
      this.snackbar.open()
  }
}

export default ListItem;