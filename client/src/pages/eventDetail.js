import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Button from "react-bootstrap/Button";

class viewEvent extends Component {
  state = {
    event: {}
  };
  componentDidMount() {
    var id = this.props.match.params.id;
    console.log(id);
    this.loadEvent(id);
  }
  loadEvent = id => {
    API.getEvent(id)
      .then(res => {
        console.log(res.data);
        this.setState({ event: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row fluid>
          <Col>
            <h3 className="eventDetail mt-5">{this.state.event.Name}</h3>
          </Col>
        </Row>
        <Row fluid>
          <Col size="md-5">
            <span className="eventDetail">{this.state.event.LocationName}</span>
            <br />
            <span className="eventDetail">{this.state.event.Game} / {this.state.event.Console}</span> <br />
            <span className="eventDetail">{this.state.event.Description}</span>
          </Col>
          <Col size="md-5" offset="md-2">
          <span className="eventDetail">{this.state.event.Q1}</span>
            <br />
            <span className="eventDetail">{this.state.event.Q2}</span>
            <br />
          </Col>
        </Row>
        <span className="border-top" />
        <Row>
          <Col>
            <u className="eventDetail">Attendees:</u>
            <br />
          </Col>
        </Row>
        <Row>
          <Button className="mt-5" href={`${this.state.event._id}/register`}>Register Here</Button>
        </Row>
      </Container>
    );
  }
}

export default viewEvent;
