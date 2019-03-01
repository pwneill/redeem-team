import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Card, CardBody } from "../components/Card";
import Button from "react-bootstrap/Button";

class Events extends Component {
  state = {
    events: []
  };
  componentDidMount() {
    this.loadEvents();
  };
  loadEvents = () => {
    API.getEvents()
      .then(res => {
        console.log(res);
        this.setState({ events: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron id={"eventsJumbotron"}>
          <h1>
            <strong>Gamers United</strong>
          </h1>
          <h3 id="eventsbanner">Events in your Area</h3>
        </Jumbotron>
        <Row fluid>
          <Col size="md-10" offset="md-1">
            {this.state.events.length ? (
              <Card id="maineventsCard">
                {this.state.events.map(event => (
                  <CardBody className="mb-5" key={event._id}>
                    <Row>
                      <Col size="md-3"><img className="img-thumbnail" src={event.ImgSrc} alt={event.Name} /></Col>
                      <Col size="md-6">
                        <div className="text-center">
                          <strong>
                            {event.Name}
                            <br />
                            on {event.Date}
                            <br />
                            {event.Address1}
                            <br />
                            {event.Game}
                            <br />
                            {event.Console}
                            <br />
                          </strong>
                        </div>
                      </Col>
                      <Col size="md-3">map</Col>
                    </Row>
                    <Row fluid>
                      <Col size="md-8">
                        {event.Description}
                      </Col>
                      <Col size="md-4">
                        <Button href={`events/${event._id}`}>See More</Button>
                        <Button href={`events/${event._id}/register`}>Register Here</Button>
                      </Col>
                    </Row>
                  </CardBody>
                ))}
              </Card>
            ) : (
              <Card>
                <h3 id="eventsbanner">No Results to Display</h3>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
