import React from "react";

function Jumbotron( props ) {
  return (
    <div
    className="jumbotron mt-3" id={props.id}
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {props.children}
    </div>
  );
}

export default Jumbotron;
