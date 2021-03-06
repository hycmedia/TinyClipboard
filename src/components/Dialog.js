import React from "react";

class Dialog extends React.Component{

    onSubmitCallback;
    title;
    content;
    name;
    buttonText;

    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
        this.name = props.name;
        this.onSubmitCallback = props.onSubmit;
        if(this.name === "create") {
            this.buttonText = "Paste"
        } else {
            this.buttonText = "OK"
        }
    }

    createDialog() {
        return (<div className={"mdc-dialog " + this.name} id={"mdc-dialog-" + this.name} role={"alertdialog"} aria-modal={"true"} aria-labelledby={"my-dialog-title"} aria-describedby={"my-dialog-content"}>
            <div className={"mdc-dialog__container"}>
                <div className={"mdc-dialog__surface"}>
                    <h2 className={"mdc-dialog__title"}>
                        {this.title}
                    </h2>
                    <div className={"mdc-dialog__content"}>
                        {this.content}
                    </div>
                    <footer className={"mdc-dialog__actions"}>
                        <button onClick={() => this.onSubmit()} type={"button"} id={"paste-button"} className={"mdc-button mdc-dialog__button"} data-mdc-dialog-action={"no"}>
                            <span className={"mdc-button__label"}>{this.buttonText}</span>
                        </button>
                    </footer>
                </div>
            </div>
            <div className={"mdc-dialog__scrim"}></div>
        </div>)
    }

    onSubmit() {
        this.onSubmitCallback();
    }

    render() {
        return this.createDialog();
    }


    static insertNote() {
    }

}

export default Dialog;