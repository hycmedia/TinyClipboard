import React from 'react';
import {MDCList} from '@material/list';

class InfoDialog extends React.Component {

    dialog;

    static createDialog(title, text, name) {
        return(
            <div className={"mdc-dialog " + name} role={"alertdialog"} aria-modal={"true"} aria-labelledby={"my-dialog-title"} aria-describedby={"my-dialog-content"}>
                <div className={"mdc-dialog__container"}>
                <div className={"mdc-dialog__surface"}>
                    <h2 className={"mdc-dialog__title"}>
                       {title}
                    </h2>
                    <div className={"mdc-dialog__content"}>
                        {text}
                    </div>
                    <footer className={"mdc-dialog__actions"}>
                        <button type={"button"} onClick={() => } className={"mdc-button mdc-dialog__button"} data-mdc-dialog-action={"no"}>
                            <span className={"mdc-button__label"}>No</span>
                        </button>
                    </footer>
                </div>
                </div>
                <div className={"mdc-dialog__scrim"}></div>
            </div>
        )
    }

  render() {
      return InfoDialog.createDialog(this.props.title, this.props.text, this.props.name);
    }


}

export default InfoDialog;