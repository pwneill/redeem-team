import React from "react";
import "./style.css";

export function Card(props) {
    return (
        <div className="card mt-2" id={props.id}>
            {props.children}
        </div>
    )
};

export function CardHeader(props) {
    return (
        <div className="card-header">
            {props.children}
        </div>
    )
};

export function CardBody(props) {
    return (
        <div className="card-body">
            {props.children}
        </div>
    )
}