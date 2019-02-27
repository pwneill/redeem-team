import React from "react";

export function Dropdown({ children }) {
    return (
        <div className="dropdown">
            { children }
        </div>
    )
}

export function DropdownBtn({ children }) {
    return (
        <button className="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            { children }
        </button>
    )
}

export function DropdownMenu({ children }) {
    return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            { children }
        </div>
    )
}

export function DropdownItem(props) {
    return (
        <a {...props} className="dropdown-item" href="/news"><p>{props.children}</p></a>
    )
}