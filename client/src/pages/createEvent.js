import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import fieldNames from "../utils/newEvent.json";
import { Card, CardHeader, CardBody } from "../components/Card";
import Form from "react-jsonschema-form";
import API from "../utils/API"
import { List, ListItem } from "../components/List";
import auth0Client from "../components/Auth/Auth";

const schema = fieldNames;

let isUser = false;

class createEvent extends Component {
    log = type => console.log.bind(console, type);

    onSubmit = ({ formData }, e) => {
        if (isUser === false) {
            alert("You must be logged in to submit an event.")
        } else {
            formData.user = auth0Client.getProfile().name;
            console.log(formData);
            API.saveEvent(formData).then(function() {
                alert("Thank you for submitting this event to Gamers United. The event has been added to the 'View Events' page.")
                console.log("Data submitted: ", formData)
            })
            .catch(function(err) {
                console.log(err);
            });

        }
    };

    componentDidMount = () => {
        this.isUser();
    }

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
                        <Card id={"createHeaderCard"}>
                            <Container fluid>
                                <Row>
                                    <Col size={"md-12"}>
                                        <Card id={"createWordsCard"}>
                                            <CardHeader>
                                                <h1 id="createEventsPageGamersUnited"><strong>Gamers United</strong></h1>
                                                <h3 id="eventsbanner">Add a New Event</h3>
                                            </CardHeader>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <Container fluid>
                            <Row>
                                <Col size={"md-12"}>
                                    <Card id={"createMainContainer"}>
                                        <CardBody>
                                            <Col size={"md-12"}>
                                                <List id={"createOverflow"}>
                                                    <ListItem key={"1"}>
                                                        <Card id={"createEventsCard"}>
                                                            <CardBody>
                                                                {<div className="mb-5">
                                                                    <Row fluid>
                                                                        <Col size="md-6" offset="md-3">
                                                                            <Form id={"createEventsForm"}
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

export default createEvent;


