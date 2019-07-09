import React from 'react';
import {MDCRipple} from '@material/ripple';
import InfoDialog from "./Dialog";
import {MDCDialog} from "@material/dialog/component";

class FabButton extends React.Component {
    dialog;
    render() {
        return <button onClick={() => this.createDialog()} className="mdc-fab button-top app-fab-absolute" key={10}><span className="material-icons mdc-fab__icon" key={102}>add</span></button>
      }
    
      componentDidMount() {
        const buttonRipple = new MDCRipple(document.querySelector('.mdc-fab'))
      }

      createDialog() {
          this.dialog = new MDCDialog(document.querySelector('.create'));
          this.dialog.open();
      }
}

export default FabButton;