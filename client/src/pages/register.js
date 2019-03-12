import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "../utils/registerEvent.json";
import { Card, CardHeader, CardBody } from "../components/Card";
import Form from "react-jsonschema-form";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

let schema = fieldNames;
let eventID = window.location.href;
eventID = eventID.replace("http://localhost:3000/register/", "")

class Register extends Component {
    log = type => console.log.bind(console, type);

    onSubmit = ({ formData }, e) => {
        formData.EventID = eventID;
        console.log(formData);
        API.saveRegister(formData).then(function() {
            console.log("Data submitted: ", formData)
        }).catch(function(err) {
            console.log(err);
        });

    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Card id={"registerHeaderCard"}>
                            <Container fluid>
                                <Row>
                                    <Col size={"md-12"}>
                                        <Card id={"registerWordsCard"}>
                                            <CardHeader>
                                                <h1><strong>Gamers United</strong></h1>
                                                <h3 id="eventsbanner">Register for this Event</h3>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <Container fluid>
                            <Row>
                                <Col size={"md-12"}>
                                    <Card id={"registerMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                <List id={"registerOverflow"}>
                                                    <ListItem key={"1"}>
                                                        <Card id={"registerEventsCard"}>
                                                            <CardBody>
                                                                {<div className="mb-5">
                                                                    <Row fluid>
                                                                        <Col size="md-6" offset="md-3">
                                                                            <Form
                                                                                safeRenderCompletion={true}
                                                                                schema={schema}
                                                                                onSubmit={this.onSubmit}
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>}
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
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Register;