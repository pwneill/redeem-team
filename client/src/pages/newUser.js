import React, { Component } from 'react';
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";


class newUser extends Component {

    render() {

        const inputStyle = {
            "margin": "40px"
        }

        const regularInputWidth = {
            "width": "100%"
        }

        const wideInputWidth = {
            "width": "100%"
        }

        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Card id={"userMainContainer"}>
                            <CardBody>
                                <Col size={"md-12"}>
                                    <List id={"userOverflow"}>
                                        <ListItem key={"1"}>
                                            <Card id={"userEventsCard"}>
                                                <CardBody>
                                                    <Container fluid>
                                                        <Row>
                                                            <Col size={"md-12"} className="center-block text-center">
                                                                <h2 className="text-center">Create New User</h2>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-6"}>
                                                                <input style={regularInputWidth} type="text" aria-label="First Name" className="form-control" placeholder="First Name"></input>
                                                            </Col>
                                                            <Col size={"md-6"}>
                                                                <input style={regularInputWidth} type="text" aria-label="Last Name" className="form-control" placeholder="Last Name"></input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-12"} style={inputStyle}>
                                                                <input style={wideInputWidth} type="text" aria-label="Email Address" className="form-control" placeholder="Email Address"></input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-12"} style={inputStyle}>
                                                                <input style={wideInputWidth} type="text" aria-label="Phone Number" className="form-control" placeholder="Phone Number"></input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-6"}>
                                                                <input style={regularInputWidth} type="text" aria-label="Preferred Gaming System" className="form-control" placeholder="Preferred Gaming System"></input>
                                                            </Col>
                                                            <Col size={"md-6"}>
                                                                <input style={regularInputWidth} type="text" aria-label="Favorite Game" className="form-control" placeholder="Favorite Game"></input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-12"} style={inputStyle}>
                                                                <input style={wideInputWidth} type="text" aria-label="Profile Picture" className="form-control" placeholder="Profile Picture - Paste a URL of your Photo"></input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-6"}>
                                                                <input style={regularInputWidth} type="text" aria-label="Enter Password" className="form-control" placeholder="Enter Password"></input>
                                                            </Col>
                                                            <Col size={"md-6"}>
                                                                <input style={regularInputWidth} type="text" aria-label="Re-Enter Password" className="form-control" placeholder="Re-Enter Password"></input>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col size={"md-4"} className="center-block">
                                                            </Col>
                                                            <Col size={"md-4"} className="center-block">
                                                                <button type="button" id={"userButton"} className="btn btn-dark">Create New User</button>
                                                            </Col>
                                                            <Col size={"md-4"} className="center-block">
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </CardBody>
                                            </Card>
                                        </ListItem>
                                    </List>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default newUser

