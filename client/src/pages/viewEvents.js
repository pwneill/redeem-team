import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
// import { Card, CardHeader, CardBody } from "../components/Card";

class Events extends Component {
    render() {
        return (
            <Container fluid>
              <Jumbotron id={"eventsJumbotron"}>
              <h1>App Name</h1>
              <h3>Events in your Area</h3>
              </Jumbotron>
              <Row fluid>
              <Col size="md-9" offset="md-3">
              </Col>
              </Row>
              </Container>
        )
    }
}

export default Events;