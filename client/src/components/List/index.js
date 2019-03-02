import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List(props) {
  return (
    <div className="list-overflow-container" id={props.id}>
      <ul className="list-group">{props.children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
