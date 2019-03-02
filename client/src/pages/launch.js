import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class Launch extends Component {
    render() {
        return (
            <Card id={"launchCard"}>
                <CardBody>
                    <Container fluid>
                        <Row>
                            <Col size={"md-4"}>
                                <a href={"/events"}><Card id={"eventsCard"}>
                                    <CardBody>
                                        <h1>Check out local events!</h1>
                                    </CardBody>
                                </Card></a>
                            </Col>
                            <Col size={"md-4"}>
                                <a href={"/create_event"}><Card id={"createCard"}>
                                    <CardBody>
                                        <h1>Create a new event!</h1>
                                    </CardBody>
                                </Card></a>
                            </Col>
                            <Col size={"md-4"}>
                                <a href={"/news"}><Card id={"newsCard"}>
                                    <CardBody>
                                        <h1>Get all of your Esports News!</h1>
                                    </CardBody>
                                </Card></a>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>

        )
    }
}

export default Launch;