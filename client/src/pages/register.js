import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "../utils/registerEvent.json";
import { Card, CardHeader, CardBody } from "../components/Card";
import Form from "react-jsonschema-form";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import auth0Client from "../components/Auth/Auth";

let schema = fieldNames;
let isUser = false;

class Register extends Component {
    log = type => console.log.bind(console, type);

    onSubmit = ({ formData }, e) => {
        this.isUser();
        let eventID = window.location.href;
        eventID = eventID.replace("https://powerful-beyond-98279.herokuapp.com/", "")
        console.log(formData);
        if (isUser === false) {
            alert("You need to be logged in to register for this event.")
        } else {
            formData.EventID = eventID;
            formData.user = auth0Client.getProfile().name;
            API.saveRegister(formData).then(function () {
                console.log("Data submitted: ", formData)
                alert("Thank you for registering for this event on Gamers United. To view this registration go to the 'See more Details' page from the 'Events' page.")
            }).catch(function (err) {
                console.log(err);
            });
        }

    };

    isUser = () => {
        console.log(auth0Client.expiresAt)

        if(auth0Client.expiresAt) {
            isUser = true
        } else {
            isUser = false
        }

        console.log(isUser);
    }

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