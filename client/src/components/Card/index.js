import React from "react";

export function Card(props) {
    return (
        <div id={props.id} className={"card " + props.className}>
            {props.children}
        </div>
    )
}

export function CardHeader({children}) {
    return (
        <div className={"card-header"}>
            {children}
        </div>
    )
}

export function CardBody({children}) {
    return (
        <div className={"card-body"}>
            {children}
        </div>
    )
}