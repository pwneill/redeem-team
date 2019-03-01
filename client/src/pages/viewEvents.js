import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardHeader, CardBody } from "../components/Card";
import Button from "react-bootstrap/Button";   


class Events extends Component {
    state = {
        events: []
    };
    componentDidMount() {
        this.loadEvents();
    }
    loadEvents = () => {
        API.getEvents()
            .then(res => {
                console.log(res)
                this.setState({ events: res.data })
            })
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
                            <List id={"overflow"}>
                                <Card id="maineventsCard">
                                    {this.state.events.map(event => (
                                        <ListItem key={event._id} className="mt-2">
                                            <CardBody>
                                                <Row>
                                                    <Col size="md-3">
                                                        <img src={event.ImgSrc} width="300" length="300" />
                                                    </Col>
                                                    <Col size="md-6">
                                                        <div className="text-center">
                                                            <strong>
                                                                {event.Name}<br />
                                                                on {event.Date}<br />
                                                                {event.AddressLine1}<br />
                                                                {event.AddressLine2}<br />
                                                                {event.City}<br />
                                                                {event.State}<br />
                                                                {event.Zip}<br />
                                                                {event.Game}<br />
                                                                {event.Console}<br />
                                                            </strong>
                                                        </div>
                                                        <br />
                                                    </Col>
                                                    <Col size="md-3">{event.mapSrc}</Col>
                                                    
                                                </Row>
                                                <Row fluid>
                                                    <Col>
                                                    <div className="text-center">
                                        {event.Description}
                                        </div>
                                        <br />
                                                    </Col>
                                                    <Col>
                                                        <Button href={`events/${event._id}`} className="float-left btn btn-dark">See More Details</Button>
                                                        <Button href={`events/${event._id}/register`} className="float-right btn btn-dark">Register Here</Button>
                                                    </Col>
                                                </Row>
                                        
                                            </CardBody>
                                            

                                        </ListItem>))}
                                </Card>

                            </List>
                        ) : (
                                <Card>
                                    <h3 id="eventsbanner">No Results to Display</h3>
                                </Card>
                            )}
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Events;