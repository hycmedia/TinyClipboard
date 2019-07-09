import React from 'react';
import {MDCList} from '@material/list';
import ListItem from "./ListItem";
import {MDCRipple} from "@material/ripple/component";
import {MDCDialog} from "@material/dialog/component";

class Dialog extends React.Component {

    dialog;

    static createDialog(title, text) {
        return(
            <div className={"mdc-dialog"} role={"alertdialog"} aria-modal={"true"} aria-labelledby={"my-dialog-title"} aria-describedby={"my-dialog-content"}>
                <div className={"mdc-dialog__container"}>
                    <div className={"mdc-dialog__title"}>
                        <h2 className={"mdc-dialog__title"}>{title}</h2>
                    </div>
                    <div className={"mdc-dialog__content"}>
                    </div>
                    <footer className={"mdc-dialog__actions"}>
                        <button type={"button"} className={"mdc-button mdc-dialog__button"} data-mdc-dialog-action={"no"}>
                            <span className={"mdc-button__label"}>No</span>
                        </button>
                    </footer>
                </div>
                <div className={"mdc-dialog__scrim"}></div>
            </div>
        )
    }

  render() {
      return Dialog.createDialog("test", "test");
    }

    componentDidMount() {
        this.dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
        this.dialog.open();
    }

}

export default Dialog;