import React from 'react';
import {MDCList} from '@material/list';
import ListItem from "./ListItem";
import {MDCRipple} from "@material/ripple/component";

class List extends React.Component {

  ripple;
  listItemNumbers;
  listItems;

  constructor(props) {
      super(props);
      this.listItemNumbers = ["1","2","3","4","5"];
      this.listItems = this.listItemNumbers.map((i) => <ListItem key={"item_" + i} value={i} name={"test"} text={"test"}/>)
  }

  render() {
      return <ul className="mdc-list">
          {this.listItems}
      </ul>
    }

  componentDidMount() {
      // console.log(this.listItems.current);
      // this.ripple = new MDCRipple(this.listItems.current)
  }
}

export default List;