import React from 'react';
import {MDCList} from '@material/list';
import ListItem from "./ListItem";
import {MDCRipple} from "@material/ripple/component";
import App from "../App"


class List extends React.Component {

  ripple;
  static listItemNotes = [];
  listItems = [];

  constructor(props) {
      super(props);
      List.listItemNotes = props.list
      }

  render() {
      List.listItemNotes = this.props.list;
      let i;
      if (List.listItemNotes.length !== 0) {
          this.listItems.push(<ListItem key={"item_" + List.listItemNotes.length} value={List.listItemNotes - 1} name={List.listItemNotes[List.listItemNotes.length - 1]} text={"test"}/>)
      }


      return <ul className="mdc-list" >
          {this.listItems}
      </ul>
    }

  componentDidMount() {

      // this.ripple = new MDCRipple(this.listItems.current)
  }

  addToList(name, text) {
      //     let button = document.querySelector(".");
      // List.listItemNotes.push({name: name, text: text});
      // this.setState({notes: List.listItemNotes})
  }
}

export default List;