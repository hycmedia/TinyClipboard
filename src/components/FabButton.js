import React from 'react';
import {MDCRipple} from '@material/ripple';

class FabButton extends React.Component {
    render() {
        return <button className="mdc-fab button-top app-fab-absolute" key={10}><span className="material-icons mdc-fab__icon" key={102}>add</span></button>
      }
    
      componentDidMount() {
        const buttonRipple = new MDCRipple(document.querySelector('.mdc-fab'))
      }
}

export default FabButton;