import React from 'react';
import {MDCList} from '@material/list';
import Dialog from "./Dialog";
import {MDCTextField} from "@material/textfield/component";

class TextDialog extends Dialog {

    dialog;
    textField;

    constructor(props) {
        super(props);

        this.content = this.createContent();
    }

    createContent() {
        return (
            <div className={"mdc-text-field"}>
                <input type={"text"} className={"mdc-text-field__input"} id={"input-field"}/>
                <label className={"mdc-floating-label"} htmlFor={"input-field"}>Titel</label>
                <div className={"mdc-line-ripple"}></div>
            </div>
        )
    }

    render() {
        return this.createDialog();
    }

    onSubmit() {
        this.onSubmitCallback(this.textField.value);
    }

    componentDidMount() {
        this.textField = new MDCTextField(document.querySelector(".mdc-text-field"))
    }

    static insertNote() {
        alert("data");
        //addToList(this.textField.value, "test")
    }
}

export default TextDialog;