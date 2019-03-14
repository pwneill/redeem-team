import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props}  placeholder={props.placeholder} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function SaveBtn(props) {
  return (
    <button {...props} className="saveBtn btn btn-dark">
      {props.children}
    </button>
  );
}

export function DeleteBtn(props) {
  return (
    <button {...props} className="saveBtn btn btn-dark">
      {props.children}
    </button>
  );
}
