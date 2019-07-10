import React from 'react';
import {MDCList} from '@material/list';
import {MDCRipple} from "@material/ripple/component";

class ListItem extends React.Component {

  name;
  text;
  ripple;
  rippleItem;

  constructor(props) {
      super(props);
      this.ripple = React.createRef();
  }

  render() {
      return <li onClick={this.handleClick} className="mdc-list-item" ref={this.ripple} id={this.props.name}><span className="mdc-list-otem__text">{this.props.name}</span></li>;
    }

  componentDidMount() {
      this.rippleItem = new MDCRipple(this.ripple.current)
  }

  handleClick(e) {
      e.target.id.select()
      document.execCommand("copy")
  }
}

export default ListItem;