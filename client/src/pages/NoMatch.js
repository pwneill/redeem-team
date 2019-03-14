import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardHeader, CardBody } from "../components/Card";

class NoMatch extends Component {
    render() {
        return (
            <Card id="maineventsCard">
                <h1>NoMatch Page</h1>
                <h1>404 page not found</h1>
            </Card>
        )
    }
}

export default NoMatch;