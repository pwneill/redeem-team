import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardHeader, CardBody } from "../components/Card";

class Events extends Component {
    state = {
        events: []
    };
    componentDidMount() {
        this.loadEvents();
    }
    loadEvents = () => {
        API.getEvents()
            .then(res => this.setState({ events: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (
            <Container fluid>
                <Jumbotron id={"eventsJumbotron"}>
                    <h1><strong>Gamers United</strong></h1>
                    <h3 id="eventsbanner">Events in your Area</h3>
                </Jumbotron>
                <Row fluid>
                    <Col size="md-10" offset="md-1">
                        {this.state.events.length ? (
                            <Card id="maineventsCard">
                                {this.state.events.map(event => (
                                    <CardBody key={event._id}>
                                        <strong>
                                            {event.name} on {event.date}
                                            {event.address1}
                                            {event.game}  / {event.console}
                                        </strong>
                                    </CardBody>

                                ))}
                            </Card>
                        ) : (
                                <Card>
                                    <h3 id="eventsbanner">No Results to Display</h3>
                                </Card>
                            )};
                </Col>
                </Row>

            </Container>
        )
    }
}

export default Events;