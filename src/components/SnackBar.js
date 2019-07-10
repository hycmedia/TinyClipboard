import React from 'react';
import {MDCRipple} from '@material/ripple';
import {MDCDialog} from "@material/dialog/component";


class SnackBar extends React.Component {
    dialog;
    render() {
        return <div className={"mdc-snackbar " + this.props.name}>
            <div className={"mdc-snackbar__surface"}>
                <div className={"mdc-snackbar__label"} role={"status"} aria-live={"polite"}>
                    {this.props.text}
                </div>
            </div>
        </div>
    }
}

export default SnackBar;