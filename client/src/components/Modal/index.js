import React from "react";

export function Modal(props) {
    return (
        <div id={props.id} className={"modal fade"} aria-hidden={"true"}>
            <div className={"modal-dialog"} role={"document"}>
                <div className={"modal-content"}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export function ModalHeader() {
    return (
        <div className={"modal-header"}>
                <h5 className={"modal-title"} >Thank You!</h5>
                <button type={"button"} className={"close"} data-dismiss={"modal"} aria-label={"Close"}>
                    <span aria-hidden={"true"}>&times;</span>
                </button>
            </div>
    )
}

export function ModalBody(props) {
    return (
        <div className={"modal-body"}>
            {props.children}
      </div>
    )
}

export function ModalFooter() {
    return (
        <div className={"modal-footer"}>
                <button type={"button"} className={"btn btn-secondary"} data-dismiss={"modal"}>Close</button>
                <button type={"button"} className={"btn btn-primary"}>Save changes</button>
            </div>
    )
}


