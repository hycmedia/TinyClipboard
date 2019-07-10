import React from 'react';
import {MDCList} from '@material/list';
import Dialog from "./Dialog";
import {MDCTextField} from "@material/textfield/component";
import {MDCDialog} from "@material/dialog/component";
import FabButton from "./FabButton";

class TextDialog extends Dialog {

    dialog;
    textField;
    ripple;
    dialog;

    constructor(props) {
        super(props);
        this.content = this.createContent();
    }

    createContent() {
        return (
            <div className={"mdc-text-field " + this.name + "_ripple"}>
                <input type={"text"} className={"mdc-text-field__input"} id={"input-field_" + this.name}/>
                <label className={"mdc-floating-label"} htmlFor={"input-field"}>Text</label>
                <div className={"mdc-line-ripple"}></div>
            </div>
        )
    }

    render() {
        return this.createDialog();
    }

    handleKey(e) {
        console.log(document.getElementById("paste-button").click());
        if(e.ctrlKey && e.key === "v") {
        }
    }

    onSubmit() {
                if(this.name === "create") {
                    this.onSubmitCallback(this.textField.value);
                }
    }

l
    componentDidMount() {
        this.textField = new MDCTextField(document.querySelector("." + this.name + "_ripple"))
    }
}

export default TextDialog;