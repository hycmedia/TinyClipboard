import React from 'react';
import {MDCList} from '@material/list';

class List extends React.Component {

  noteList;

  render() {
      return <ul className="mdc-list">
        <li className="mdc-list-item" tabIndex="0">
          <span className="mdc-list-otem__text">Test</span>
        </li>
      </ul>
    }

  componentDidMount() {
    
  }
}

export default List;