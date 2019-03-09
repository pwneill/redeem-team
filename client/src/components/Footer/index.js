import React from "react";
import "./style.css";
import {withRouter} from 'react-router-dom';


function Footer(props) {

    const Artists = withRouter(({ history }) => (
        <a href="" onClick={(e) => {
          e.preventDefault();
          history.push('/artists');
        }}><h6 id="artistRouteLink">Pixel Artist Sources</h6></a>
    ))
    
    return (
        <div>
            <Artists></Artists>
        </div>
    )
}

export default Footer;